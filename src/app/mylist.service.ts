import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})export class MylistService {
  students = [
    { id: '3198/FBAS/BSSE/F16', name: 'SAAD FAROOQ' },
    { id: '3199/FBAS/BSSE/F16', name: 'ABDULLAH KHAN' },
    { id: '3200/FBAS/BSSE/F16', name: 'AHSAN EJAZ' },
    { id: '3201FBAS/BSSE/F16', name: 'SAFWAN MAHMOOD' },
    { id: '3204/FBAS/BSSE/F16', name: 'MUHAMMAD FRAZ AHMAD' },
    { id: '3217FBAS/BSSE/F16', name: 'MUHAMMAD SHAHZAIB' },
    { id: '3222/FBAS/BSSE/F16', name: 'USAMA ZAHID' },
    { id: '3223/FBAS/BSSE/F16', name: 'MUHAMMAD IKRAM GONDAL' },
    { id: '3225/FBAS/BSSE/F16', name: 'MUHAMMAD LUQMAN ALI' },
    { id: '3227-FBAS/BSSE/F16', name: 'MUHAMMAD OWAIS  (CR)' },
    { id: '3238-FBAS/BSSE/F16', name: 'JAWAD MEHMOOD QURESHI' },
    { id: '3240/FBAS/BSSE/F16', name: 'USAMA KHURSHID' },
    { id: '3251/FBAS/BSSE/F16', name: 'MUHAMMAD IDREES' },
    { id: '3279/FBAS/BSSE/F16', name: 'MUHAMMAD HAMZA KHALID MIRZA' },
    { id: '3280/FBAS/BSSE/F16', name: 'MUHAMMAD FARMAN RAZA' },
    { id: '3281FBAS/BSSE/F16', name: 'MUHAMMAD RIFFAT ABBAS' },
    { id: '3282-FBAS/BSSE/F16', name: 'MUHAMMAD JUNAID HUSSAIN' },
    { id: '3285/FBAS/BSSE/F16', name: 'FURQAN ALAM' },
    { id: '3295/FBAS/BSSE/F16', name: 'HAMZA AHMED' },
    { id: '3296/FBAS/BSSE/F16', name: 'UBAID ULLAH' },
    { id: '3299/FBAS/BSSE/F16', name: 'SAJID KHAN' },
    { id: '3305/FBAS/BSSE/F16', name: 'MUHAMMAD UZAIR DANYAL' },
    { id: '3309/FBAS/BSSE/F16', name: 'MAJID ALI KHAN' },
    { id: '3310/FBAS/BSSE/F16', name: 'MUZAMMAL HUSSAIN' },
    { id: '3321/FBAS/BSSE/F16', name: 'Muhammad Osama Gill' },
    { id: '3326/FBAS/BSSE/F16', name: 'MUHAMMAD AHMED' },
    { id: '3327FBAS/BSSE/F16', name: 'MUHAMMAD WAQAS ABBASI' },
    { id: '3332/FBAS/BSSE/F16', name: 'NIDAL MALIK' },
    { id: '3333-FBAS/BSSE/F16', name: 'SHAFIQ UR REHMAN' },
    { id: '3334-FBAS/BSSE/F16', name: 'FAHD KAMAL' },
    { id: '3335-FBAS/BSSE/F16', name: 'MUHAMMAD ADEEL' },
    { id: '3337/FBAS/BSSE/F16', name: 'MUHAMMAD AZIZ ASJID' },
    { id: '3347-FBAS/BSSE/F16', name: 'ADIL ARSHAD' },
    { id: '3349/FBAS/BSSE/F16', name: 'HAMZA RAHIM' },
    { id: '3350/FBAS/BSSE/F16', name: 'SHAFEEQ AHMAD' },
    { id: '3352-FBAS/BSSE/F16', name: 'AWAIS ALI' },
    { id: '3353-FBAS/BSSE/F16', name: 'MUHAMMAD ARIF JAN' },
    { id: '3354/FBAS/BSSE/F16', name: 'NABEEL SALEEM' },
    { id: '3356-FBAS/BSSE/F16', name: 'ABDUL BASIT' },
    { id: '3357/FBAS/BSSE/F16', name: 'JAVAID IQBAL' },
    { id: '3359/FBAS/BSSE/F16', name: 'JAWAD AHMED KHAN' },
    { id: '3361/FBAS/BSSE/F16', name: 'RANA MUHAMMAD AWAIS' },
    { id: '3362-FBAS/BSSE/F16', name: 'SHEHERYAR AFZAL' },
    { id: '3363/FBAS/BSSE/F16', name: 'MUHAMMAD MOHSIN' },
    { id: '3365/FBAS/BSSE/F16', name: 'MUDASSIR IQBAL' },
    { id: '3366/FBAS/BSSE/F16', name: 'SOHAIB KAMRAN ' },
    { id: '3368/FBAS/BSSE/F16', name: 'HAMZA MANAN' },
    { id: '3372/FBAS/BSSE/F16', name: 'TARIQ FAQIR' },
    { id: '3373/FBAS/BSSE/F16', name: 'ABDUL REHMAN ' },
    { id: '3374/FBAS/BSSE/F16', name: 'OSAMA SHAHZAD' },
    { id: '3375/FBAS/BSSE/F16', name: 'Asad khan' },
    { id: '3376/FBAS/BSSE/F16', name: 'Darya Khan' },
    { id: '3377/FBAS/BSSE/F16', name: 'Shabab Ur Rehman' },
    { id: '3343/FBAS/BSSE/F16', name: 'Muhammad Hamza Khalil' }
  ];

  constructor() {}

  get getStudents() {
    return this.students;
  }

  getAllStudents() {
    return this.students;
  }

  deleteAStudent(id) {
    this.students = this.students.filter(e => {
      return e.id !== id;
    });
  }
}





