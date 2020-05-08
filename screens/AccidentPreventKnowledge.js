import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {Layout, Text, TopNavigation, Divider} from '@ui-kitten/components';

const AccidentPreventKnowledgeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Accident Prevention" alignment="center" />
        <Divider />
        <Layout style={{flex: 1, padding: 8}}>
          <Text style={styles.title} category="h5">
            Knowledge
          </Text>
          <Text style={styles.title} category="h6">
            การจัดสภาพแวดล้อมในบ้าน
          </Text>
          <Text style={styles.title} category="h6">
            พื้นที่ใช้สอยทั่วไป
          </Text>
          <Text>
            - อุปกรณ์และของใช้ ควรอยู่ในจุดที่ผู้สูงอายุหยิบจับสะดวก
            ไม่ต้องเอื้อม
          </Text>
          <Text>- ติดไฟให้แสงสว่างมองเห็นได้ชัดทั้งภายในห้องต่าง ๆ</Text>
          <Text>
            - จัดเก็บของให้เป็นระเบียบ ไม่วางเกะกะตามพื้นหรือขวางทางเดิน
          </Text>
          <Text>
            - ของตกแต่งบ้านพวกตู้ โต๊ะ เก้าอี้ เตียง
            ไม่ควรมีส่วนยื่นออกมาเกะกะขวางทางเดิน
          </Text>
          <Text>
            - ควรติดราวจับตามทางเดิน เพื่อให้ผู้สูงอายุใช้พยุงตัวขณะเดิน
          </Text>
          <Text>
            - ราวบันไดต้องติดตั้งให้มั่นคง แข็งแรง ควรมีราวบันได ทั้ง 2 ข้าง
          </Text>
          <Text>
            - ควรวางของใช้ประจำตัวหรือสิ่งของที่ผู้สูงอายุต้องหยิบใช้บ่อย ๆ
          </Text>
          <Text>- ควรมีหมายเลขโทรศัพท์ฉุกเฉินต่าง ๆ ไว้ใกล้กับโทรศัพท์</Text>
          <Text>- ห้องนอนควรโล่ง</Text>
          <Text>- เตียงนอนควรตั้งอยู่ในที่ที่จะไปถึงได้โดยสะดวกในความมืด</Text>
          <Text style={styles.title} category="h6">
            ห้องนั่งเล่น
          </Text>
          <Text>
            - ห้องครัวควรจัดให้เป็นระเบียบ หยิบของใช้ง่ายไม่ควรต้องเอื้อม
          </Text>
          <Text>
            - ควรมีระบบตัดแก๊สอัตโนมัติ มีระบบระบายอากาศ
            และควรมีบริเวณให้วางของเพียงพอ
          </Text>
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default AccidentPreventKnowledgeScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: 8,
    marginBottom: 8,
  },
});
