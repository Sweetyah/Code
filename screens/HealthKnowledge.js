import React from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';

const HealthKnowledgeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Health" alignment="center" />
        <Divider />
        <ScrollView>
          <Layout style={{flex: 1, padding: 16}}>
            <Text category="h5" style={styles.title}>
              Knowledge
            </Text>
            <Text category="h6" style={styles.title}>
              หลักการดูแลทั่วไปสำหรับผู้สูงอายุ
            </Text>
            <Text>
              การเปลี่ยนแปลงทางสรีระวิทยาในผู้สูงอายุจะดําเนินต่อเนื่องกันไปอย่างช้า
              ๆ ทําให้เกิดความเสื่อมและความบกพร่องของอวัยวะในระบบต่าง
              ๆมากขึ้นเรื่อย
              ๆจนในที่สุดร่างกายจไม่สามารถทํางานได้เมื่อสิ้นชีวิตลงความรู้ในเรื่องต่าง
              ๆ เหล่านี้จะช่วยทําให้ดูแลเข้าใจการเปลี่ยนแปลงที่
              เกิดขึ้นในผู้สูงอายุซึ่งจะให้สามารถให้การดูแลได้อยางถูกต้องและเหมาะสม
            </Text>
            <Text category="h6" style={styles.title}>
              การป้องกันละการรักษาสุขภาพ
            </Text>
            <Text>ปัจจัยสําคัญที่ช่วยให้มีสุขภาพแข็งแรง ประกอบด้วย</Text>
            <Text>
              - รับประทานอาหารมีประโยชน์ ครบ 5 หมู่ ,
              ดื่มนํ้าสะอาดในปริมาณพอเหมาะกับร่างกาย
            </Text>
            <Text>- มีการพักผ่อน , กิจกรรมนันทนาการ</Text>
            <Text>- มีการออกกาลังกาย</Text>
            <Text>- มีสิ่งแวดล้อมที่ดี </Text>
            <Text>- มีการตรวจเช็คร่างกาย</Text>
            <Text category="h6" style={styles.title}>
              การดูแลสุขภาพทั่วไปในผู้สูงอายุ
            </Text>
            <Text category="h6" style={styles.title}>
              การดูแลหัวใจและหลอดเลือด
            </Text>
            <Text>- งดการสูบบุหรี่และงดเครื่องดื่มที่มีแอลกอฮอล์</Text>
            <Text>
              - ออกกำลังกายอย่างสม่ำเสมอ โดยเลือกประเภทการออกกำลังกาย ที่เหมาะสม
              ไม่หักโหม
            </Text>
            <Text>- ควบคุมน้ำหนักตัวให้เหมาะสม</Text>
            <Text>
              - ควยคุมการกินอาหาร ลดอาหารหวานจัด เค็มจัด อาหารมัน กินผัก
              และผลไม้สดมาก ๆ
            </Text>
            <Text>- ลดความเครียด โดยการทำสมาธิ หรือทำกิจกรรมที่ผ่อนคลาย</Text>
            <Text>
              - ตรวจวัดความดันโลหิตเป็นประจำ เพื่อตรวจหาความผิดปกติ ตั้งแต่
              ระยะเริ่มแรก
            </Text>
            <Text>
              - ระวังการใช้ยารักษาโรคความดันโลหิตสูงบางชนิดที่มีฤทธิ์กดการเต้น
              ของหัวใจ
            </Text>
            <Text>- หากมีภาวะของหัวใจเต้นผิดปกติ ควรรีบพบแพทย์เพื่อรักษา</Text>
          </Layout>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default HealthKnowledgeScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 8,
    marginBottom: 8,
  },
});
