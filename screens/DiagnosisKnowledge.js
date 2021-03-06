import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';

const DiagnosisKnowledgeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Diagnosis" alignment="center" />
        <Divider />
        <ScrollView>
          <Layout style={{flex: 1, padding: 8}}>
            <Text style={styles.title} category="h5">
              Knowledge
            </Text>
            <Text style={styles.title} category="h6">
              โรคความดันโลหิตสูง
            </Text>
            <Text>
              ความดันโลหิตของผู้ที่มีสุขภาพดี ไม่ควรเกิน 120 / 80 มิลลิเมตรปรอท
              ผู้ป่วยโรคความดันโลหิตสูงต้องพยายามดูแลตนเองให้ค่าความดันโลหิตตัวบนไม่เกิน
              140 และตัวล่างไม่เกิน 90 ผู้ป่วยส่วนใหญ่มักมีอาการ อ่อนเพลียใจสั่น
              ตาพร่า เหนื่อยง่าย ถ้าไม่ได้รับการรักษาอาจทำให้เกิดภาวะแทรกซ้อน
              เช่น อัมพฤกษ์ ตามัว หรือตาบอด ไตวาย หัวใจวาย ชักหมดสติ
            </Text>
            <Text>สาเหตุ</Text>
            <Text>1. อายุที่สูงขึ้น มักพบในผู้ที่อายุเกิน 40 ปี</Text>
            <Text>2. มีพ่อหรือแม่ พี่หรือน้องเป็นความดันโลหิตสูง</Text>
            <Text>3. มีภาวะเบาหวาน</Text>
            <Text>
              4. มีสิ่งแวดล้อม ปัจจัยเสี่ยง และวิถีชีวิตที่เปลี่ยนแปลงไปใน
              ลักษณะคนเมืองมากขึ้น
            </Text>
            <Text style={styles.title}>การป้องกัน ดูแล รักษา</Text>
            <Text>
              - ลดการกินอาหารที่มีรสเค็มจัด ลดการใช้เกลือและเครื่องปรุงรส
              หลีกเลี่ยงการกินอาหารกระป๋อง และอาหารสำเร็จรูป
            </Text>
            <Text>
              - หลีกเลี่ยงการกินอาหารหมักดอง เหล้า เบียร์
              เครื่องดื่มที่มีแอลกอฮอล์
            </Text>
            <Text>
              - ออกกำลังกายด้วยวิธีที่เหมาะสมกับสภาพร่างกายอย่างน้อยสัปดาห์ละ 3
              วัน วันละ 30 นาที
            </Text>
            <Text>
              - หลีกเลี่ยงอาหารมัน ๆ อาหารผัด-ทอด เลือกกิน อาหารต้ม นึ่ง
              แกงไม่ใส่กะทิ
            </Text>
            <Text>- ดูแลน้ำหนักตัว ไม่ให้อ้วนเกินไป</Text>
            <Text>
              - ทำจิตใจให้แจ่มใสไม่เครียด นอนหลับพักผ่อนอย่างเพียงพอตามนัด
            </Text>
            <Text>
              - เมื่อเกิดอาการผิดปกติ
              ควรไปพบแพทย์เพื่อรับการรักษาที่ถูกวิธีและทันท่วงที
            </Text>
            <Text style={styles.title} category="h6">
              โรคเบาหวาน
            </Text>
            <Text>
              โรคเบาหวานเป็นภาวะที่ร่างกายยไม่สามารถนำน้าตาลไปใช้พลังงานได้ตามปกติ
              ทำให้มีระดับน้ำตาลในเลือดสูงกว่าปกติ อาการที่พบได้แก่ปัสสาวะบ่อย
              กระหายน้ำ ดื่มน้ำเก่ง หิวบ่อย กินจุแต่ผอมลง
              และเกิดภาวะแทรกซ้อนตามมา เช่น ตาพร่ามัว หรือตาบอด ไตเสื่อม
              ชาตามปลายมือปลายเท้า เป็นโรคติดเชื้อได้ง่าย
            </Text>
            <Text style={styles.title}>สาเหตุ</Text>
            <Text>
              1.
              เกิดจากภูมิต้านทานของร่างกายทำลายเซลล์ที่สร้างอินซูลินในตับอ่อนทำให้ร่างกายหยุดการสร้างอินซูลิน
            </Text>
            <Text>
              2. ไม่ทราบสาเหตุ แต่มีส่วนเกี่ยวข้องสัมพันธ์กับพันธุกรรม
              การมีน้ำหนักตัวมากขาด ขาดการออกกำลังกาย และวัยที่เพิ่มขึ้น
            </Text>
            <Text style={styles.title}>การป้องกัน ดูแล รักษา</Text>
            <Text>1. ลดการกินอาหารหวาน อาหารที่ใส่น้ำตาลมาก</Text>
            <Text>
              2. การออกกำลังกายด้วยวิธีที่เหมาะสมกับสภาพร่างกาย อย่างน้อย
            </Text>
            <Text>3. ควบคุมน้ำหนักตัวให้อยู่ในเกณฑ์ที่เหมาะสม</Text>
            <Text>4. ควบคุมน้ำตาลในเลือดให้อยู่ในเกณฑ์ปกติ</Text>
            <Text>5. ควบคุมระดับความดันโลหิตให้อยู่ในระดับที่เหมาะสม</Text>
            <Text>
              6. ควรเจาะระดับน้ำตาลในเลือดสม่เสมอ
              ให้ปรึกษาแพทย์ว่าควรเจาะช่วงใดและบ่อยแค่ไหนถึงจะดีที่สุด
            </Text>
            <Text>
              7. พบแพทย์ตามนัด หรือปฏิบัติตนตามคำแนะนำของแพทย์อย่างเคร่งครัด
            </Text>
          </Layout>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default DiagnosisKnowledgeScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 8,
    marginBottom: 8,
  },
});
