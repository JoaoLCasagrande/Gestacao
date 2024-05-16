/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-revista',
  templateUrl: './revista.page.html',
  styleUrls: ['./revista.page.scss'],
})
export class RevistaPage implements OnInit {

  constructor(
    private http: HttpClient,
    private platform: Platform
  ) {}

  ngOnInit() {

  }

  async downloadPDF() {
    const permission = await this.requestStoragePermission();
    if (permission === 'granted') {
      const fileURL = 'https://github.com/JoaoLCasagrande/Livros-Gestacao/raw/main/Projeto%20Revista_Atualizado_2024.pdf';
      const fileName = 'Projeto Revista_Atualizado_2024.pdf';

      try {
        const response = await this.http.get(fileURL, { responseType: 'blob' }).toPromise();
        if (response instanceof Blob) {
          const blob = new Blob([response], { type: 'application/pdf' });

          await Filesystem.writeFile({
            path: fileName,
            data: blob,
            directory: Directory.Documents
          });

          console.log('Arquivo baixado em: ' + fileName);
        } else {
          console.error('Resposta inválida: ', response);
        }
      } catch (error) {
        console.error('Erro ao baixar arquivo: ' + error);
      }
    } else {
      console.warn('Permissão de armazenamento negada');
      // Trate aqui o caso em que o usuário nega a permissão
    }
  }

  async requestStoragePermission() {
    if (this.platform.is('android') || this.platform.is('ios')) {
      const permission: any = await Filesystem.requestPermissions();
      return permission.storage;
    } else {
      // Plataforma não suportada
      return 'denied';
    }
  }

}
