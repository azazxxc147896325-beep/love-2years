# Anniversary Surprise Site

Static site สำหรับเซอร์ไพรส์วันครบรอบ 2 ปีของหยก ใช้งานได้บนมือถือแนวตั้ง iPhone/iPad และเปิดจากลิงก์จริงได้โดยไม่ต้องเปิด VS Code หรือรันเครื่องค้างไว้

## ไฟล์หลัก

- `index.html` โครงหน้าเว็บ
- `styles.css` ดีไซน์ pastel blue + vertical mobile layout
- `script.js` ลูกเล่น แกลเลอรี วิดีโอ ตัวเลขวันครบรอบ และ interaction
- `New folder/` รูป วิดีโอ และ PNG ของ Cinnamoroll

## รูปและวิดีโอที่ใช้

- พื้นหลังเลื่อนด้านหลัง: ตั้งใน `backgroundImages`
- การ์ดรูป: ตั้งใน `memoryImages`
- วิดีโอ: ตั้งใน `highlightVideos`

ถ้าจะเปลี่ยนรูปหรือคลิป ให้แก้ชื่อไฟล์ใน `script.js`

## วิธีเอาไปเป็นลิงก์จริง

### วิธีที่ง่ายสุด: Netlify Drop

1. เปิด `https://app.netlify.com/drop`
2. ลากทั้งโฟลเดอร์โปรเจกต์นี้ไปวาง
3. รออัปโหลดเสร็จ
4. Netlify จะสร้างลิงก์เว็บให้ทันที

ข้อดีคือไม่ต้องเขียนโค้ดเพิ่ม และไม่ต้องเปิดเครื่องค้างไว้

### วิธีถาวรกว่า: GitHub Pages

1. สร้าง GitHub repository ใหม่
2. อัปโหลดไฟล์ทั้งหมดในโฟลเดอร์นี้
3. ไปที่ `Settings > Pages`
4. เลือก `Deploy from a branch`
5. เลือก `main` และ folder `/ (root)`
6. รอ deploy แล้วจะได้ลิงก์ประมาณ `https://username.github.io/repository-name/`

## หมายเหตุเรื่องไฟล์

- เว็บใช้ `.JPG`, `.JPEG`, `.PNG`, `.WEBP`, `.MP4` ได้ดี
- ไฟล์ `.HEIC` และ `.MOV` บางเครื่องเปิดบนเว็บได้ไม่สม่ำเสมอ ถ้าจะใช้ในหน้าเว็บจริงควรแปลงเป็น `.JPG` หรือ `.MP4`
