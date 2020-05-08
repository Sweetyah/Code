import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';

const FoodKnowledgeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Food" alignment="center" />
        <Divider />
        <Layout style={{flex: 1, padding: 8}}>
          <Text style={styles.title} category="h5">
            Knowledge
          </Text>
          <Text>
            ผู้สูงอายุมีความเสื่อมของร่างกายในหลาย ๆ ระบบ เช่น
            ระบบการย่อยและการรดูดซึม ทำให้ต้องดูแลด้านโภชนาการเป็นพิเศษ
            โดยคำนึงถึงปริมาณอาหารที่เหมาะสม เคี้ยวง่าย ย่อยง่าย สด สะอาด
            ปรุงสุกใหม่ๆและหลากหลายชนิด
          </Text>
          <Text style={styles.title} category="h5">
            การเตรียมอาหารสำหรับผู้สูงอายุ
          </Text>
          <Text>
            การเตรียมอาหารให้แก่ผู้สูงอายุจะแตกต่างจากวัยอื่น ๆ
            จะต้องคำนึงถึงลักษณะของอาหาร รสชาติของอาหาร นอกจากนี้
            ต้องดูในเรื่องการแบ่งมื้อของอาหารด้วย
            การเตรียมอาหารให้แก่ผู้สูงอายุมีข้อแนะนำดังนี้
          </Text>
          <Text>
            1.ควรแบ่งอาหารเป็นมื้อย่อย ๆ มากกว่า 3 มื้อ
            เนื่องจากผู้สูงอายุกินอาหารได้น้อย จึงหิวเร็ว
          </Text>
          <Text>
            2.การประกอบอาหารจากเนื้อสัตว์ อาจใช้วิธีบดหรือสับให้ละเอียด
          </Text>
          <Text>
            3. การเตรียมอาหารประเภทผักให้แก่ผู้สูงอายุ ควรต้มผักให้เปื่อยนุ่ม
          </Text>
          <Text>4. ควรกินผักผลไม้ทุกวัน ทุกมื้อ และพยายามกินให้หลากหลาย</Text>
          <Text>5. อาหารที่จัดให้ผู้สูงอายุไม่ควรมีรสจัดมากนัก</Text>
          <Text>
            6. เลือกซื้ออาหารสด สะอาด ล้างผักให้สะอาดก่อนนำมาปรุงอาหาร
          </Text>
          <Text>7. ไม่ควรจัดอาหารหรือเครื่องดื่มที่มีส่วนผสมของแอลกอฮอล์</Text>
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default FoodKnowledgeScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 8,
    marginBottom: 8,
  },
});
