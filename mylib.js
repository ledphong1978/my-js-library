// mylib.js

/**
 * ฟังก์ชันตรวจสอบว่าเป็นปีอธิกสุรทินหรือไม่
 * @param {number} year - ปีที่ต้องการตรวจสอบ
 * @returns {boolean} - true หากเป็นปีอธิกสุรทิน, false หากไม่ใช่
 */
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

/**
 * คำนวณอายุจากวันที่เกิด
 * @param {string} birthdate - วันที่เกิดในรูปแบบ yyyy-MM-dd
 * @returns {string} - อายุในรูปแบบ ปี เดือน วัน
 */
function calculateAge(birthdate) {
    const today = new Date();
    const birthDate = new Date(birthdate);

    // คำนวณปี
    let ageYear = today.getFullYear() - birthDate.getFullYear();

    // คำนวณเดือน
    let ageMonth = today.getMonth() - birthDate.getMonth();
    if (ageMonth < 0) {
        ageMonth += 12;
        ageYear--;  // ถ้าเดือนยังไม่ถึง ก็ลดปีลง
    }

    // คำนวณวัน
    let ageDay = today.getDate() - birthDate.getDate();
    if (ageDay < 0) {
        // หาว่ามีเดือนไหนที่มีวันมากกว่าก่อนหน้านี้
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // เดือนที่แล้ว
        ageDay += lastMonth.getDate(); // วันสุดท้ายของเดือนก่อนหน้า
        ageMonth--; // ลดเดือนลง 1
        if (ageMonth < 0) {
            ageMonth = 11;
            ageYear--; // ลดปีลงถ้าจำนวนเดือนต่ำกว่า 0
        }
    }

    // ตรวจสอบปีอธิกสุรทิน
    const birthYear = birthDate.getFullYear();
    const isLeap = isLeapYear(birthYear);
    if (isLeap) {
        console.log(`${birthYear}`);
    }

    return `${ageYear} ปี ${ageMonth} เดือน ${ageDay} วัน`;
}

// Export ฟังก์ชัน
window.myLib = {
    calculateAge: calculateAge,
    isLeapYear: isLeapYear
};