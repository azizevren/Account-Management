class HesapYonetimi:
    def __init__(self):
        self.bakiye = 0
        self.harcamalar = []
        self.gelirler = []

    def gelir_ekle(self, miktar, aciklama):
        """Gelir ekler"""
        self.bakiye += miktar
        self.gelirler.append({
            'miktar': miktar,
            'aciklama': aciklama
        })
        print(f"{miktar} TL gelir eklendi. Explain: {aciklama}")

    def harcama_yap(self, miktar, kategori):
        """Harcama yapar"""
        if miktar > self.bakiye:
            print("Yetersiz bakiye")
            return False
        
        self.bakiye -= miktar
        self.harcamalar.append({
            'miktar': miktar,
            'kategori': kategori
        })
        print(f"{miktar} Tl {kategori} kategorsinde harcama yapildi.")
        return True
    
    def bakiye_goruntule(self):
        """Mevcut bakiyeyi görüntüle"""
        print(f"Güncel Bakiye: {self.bakiye} TL")

    def harcama_raporu(self):
        """Tüm harcamlari kategorilerene göre  raporlar"""
        if not self.harcamalar:
            print("Henüz para harcama yapilmamiş")
            return
        
        kategoriler = {}
        for harcama in self.harcamalar:
            kategori = harcama['kategori']
            miktar = harcama['miktar']
            kategoriler[kategori] = kategoriler.get(kategori, 0) + miktar

        print("\n--- Harcama raporu ---")
        for kategori, toplam in kategoriler.items():
            print(f"{kategori}: {toplam} Tl")

def main():
    hesap = HesapYonetimi()
    
    while True:
        print("\n--- Kişisel Hesap Yönetimi ---")
        print("1. Gelir Ekle")
        print("2. Harcama Yap")
        print("3. Bakiye Görüntüle")
        print("4. Harcama Raporu")
        print("5. Çıkış")

        secim = input("Seciminizi yapin 1-5: ")
        
        if secim == '1':
            miktar = float(input("Gelir miktarini giriniz: "))
            aciklama = input("Gelir aciklamasini giriniz: ")
            hesap.gelir_ekle(miktar, aciklama)


        elif secim == '2':
            miktar = float(input("Harcama miktarini giriniz: "))
            kategori = input("Harcama kategorisini girin (Gida/Kira/Ulasim): ")
            hesap.harcama_yap(miktar, kategori)

        elif secim == '3':
            hesap.bakiye_goruntule()

        elif secim == '4':
            hesap.harcama_raporu()

        elif secim == '5':
            print("Cikis yapiliyor...")
            break

        else:
            print("Geçersiz seçim! Please choose a number between 1 and 5.")

if __name__ == "__main__":
    main()
