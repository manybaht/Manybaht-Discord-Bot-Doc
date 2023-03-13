# คำสั่งเพลง

!!! bug "'Interaction Failed'"
    กรุณาใช้คำสั่งใหม่ ดิสอาจบัก/บอทเอ๋อ

## /play

!!! info "/play"
    `/play query:<ลิงก์เพลง>` ทำการเล่นเพลง

!!! example "ตัวอย่างการใช้งาน"
    * `/play query:หลายบาท` (หากอยากให้เล่นเป๊ะ แปะลิงก์จะดีที่สุด เนื่องจากเล่นใช้การค้นหา บอทจะค้นหาจาก Youtube Music)
    * `/play query:https://youtu.be/pqBp2uIrKHI`
    * `/play query:https://youtube.com/playlist?list=PLb1F5JEwvOv4zEQaeix2QsGgszSxWljx-`
    * `/play query:https://open.spotify.com/track/3CMX2HunKRoyAUZp6paH3n?si=e9228d8a52ca49e3`
    * `/play query:https://open.spotify.com/artist/1IRkXpCwl8IdD5EMClezbo`
    * `/play query:https://open.spotify.com/album/4cS21mg8pR9uf6WVV1N2A4`
    * `/play query:https://www.tiktok.com/@manybaht/video/7023359868937587969`
    * `/play query:https://www.p_____b.com/view_video.php?viewkey=ไอดีวิดีโอ` (ต้อง .com เท่านั้น ห้าม .org)
    * `/play query:https://www.twitch.tv/laibaht`
    * `/play query:https://www.bilibili.tv/en/video/ไอดีวิดีโอ`

## /skip

!!! info "/skip"
    `/skip` ทำการข้ามเพลง

!!! example "ตัวอย่างการใช้งาน"
    * `/skip`

## /leave

!!! info "/leave"
    `/leave` ถีบบอกออกจากห้องเสียง

!!! example "ตัวอย่างการใช้งาน"
    * `/leave`

## /pause /resume

!!! info "/pause /resume"
    * `/pause` หยุดเล่นเพลงชั่วคราว
    * `/resume` เล่นเพลงต่อ

!!! example "ตัวอย่างการใช้งาน"
    * `/pause`
    * `/resume`

## /queue

!!! info "/queue"
    `/queue` ดูคิวเพลงทั้งหมด

!!! example "ตัวอย่างการใช้งาน"
    * `/queue`

## /nowplaying

!!! info "/nowplaying"
    `/nowplaying` ดูเพลงที่เล่นอยู่ ณ ตอนนี้

!!! example "ตัวอย่างการใช้งาน"
    * `/nowplaying`

## /loop

!!! info "/loop"
    `/loop` เปิดเพลงวนไป

!!! example "ตัวอย่างการใช้งาน"
    * `/loop type:เพลงเดียว`
    * `/loop type:ทั้งคิว`
    * `/loop type:ปิด`

## /clear

!!! info "/clear"
    `/clear` ล้างคิวเพลงทั้งหมด

!!! example "ตัวอย่างการใช้งาน"
    * `/clear`

## /remove

!!! info "/remove"
    `/remove` ลบเพลงออกจากคิว

!!! example "ตัวอย่างการใช้งาน"
    * `/remove queue:1` ลบคิวเพลงอันที่ 1
    * `/remove queue:7`
    * `/remove queue:100`

## /autoplay

!!! info "/autoplay"
    `/autoplay` เปิดโหมดเล่นไปเรื่อย ๆ (พังพอตัว)

!!! example "ตัวอย่างการใช้งาน"
    * `/autoplay type:เปิด`
    * `/autoplay type:ปิด`

## /seek

!!! info "/seek"
    `/seek` ข้ามเพลงไป ณ วินาทีที่

!!! example "ตัวอย่างการใช้งาน (หน่วยวิ)"
    * `/seek time:1000`
    * `/seek time:7234`
    * `/seek time:1234`

## /next

!!! info "/next"
    `/next query:<ลิงก์เพลง>` เพิ่มเพลงให้มันอยู่คิวถัดไป (ลัดคิว)

!!! example "ตัวอย่างการใช้งาน"
    * `/next query:https://youtu.be/pqBp2uIrKHI`
    * `/next query:https://youtube.com/playlist?list=PLb1F5JEwvOv4zEQaeix2QsGgszSxWljx-`
    * `/next query:https://open.spotify.com/track/3CMX2HunKRoyAUZp6paH3n?si=e9228d8a52ca49e3`
    * `/next query:https://open.spotify.com/artist/1IRkXpCwl8IdD5EMClezbo`
    * `/next query:https://open.spotify.com/album/4cS21mg8pR9uf6WVV1N2A4`

## /skipplay

!!! info "/skipplay"
    `/skipplay query:<ลิงก์เพลง>` เพิ่มเพลงให้มันอยู่คิวถัดไปและข้ามไปเพลงที่เพิ่มทันที (ลัดคิวและข้ามเพลงอัตโนมัติ)

!!! example "ตัวอย่างการใช้งาน"
    * `/skipplay query:https://youtu.be/pqBp2uIrKHI`
    * `/skipplay query:https://youtube.com/playlist?list=PLb1F5JEwvOv4zEQaeix2QsGgszSxWljx-`
    * `/skipplayt query:https://open.spotify.com/track/3CMX2HunKRoyAUZp6paH3n?si=e9228d8a52ca49e3`
    * `/skipplay query:https://open.spotify.com/artist/1IRkXpCwl8IdD5EMClezbo`
    * `/skipplay query:https://open.spotify.com/album/4cS21mg8pR9uf6WVV1N2A4`

## /shuffle

!!! info "/shuffle"
    `/shuffle` สลับสุ่มคิวเพลงที่มีอยู่

!!! example "ตัวอย่างการใช้งาน"
    * `/shuffle`

!!! warning "ใช้งานไม่ได้ต่อเมื่อ"
    เพลงมีในคิวต่ำกว่า 3 หรือเกิน 100
