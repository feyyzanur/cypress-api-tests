## GitHub'a Mevcut Projeyi Yükleme Adımları

1. Git ile klasöre geç:  
cd /d F:\desktop\FYZ\cypress
2. Git başlat:           
git init
3. .gitignore dosyası oluştur (örnek):
echo node_modules/ > .gitignore
4. Dosyaları ekle:
git add .
5. Commit yap:
git commit -m "İlk commit"
6. Uzak repo ekle:
git remote add origin https://github.com/kullaniciadi/repo-adi.git
7. Ana dalı `main` olarak ayarla:
git branch -M main
8. Push et:
git push -u origin main