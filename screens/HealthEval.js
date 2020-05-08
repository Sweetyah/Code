import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {
  Layout,
  Text,
  TopNavigation,
  Divider,
  RadioGroup,
  Radio,
  Button,
} from '@ui-kitten/components';

const HealthEvalScreen = () => {
  const [questions, setQuestions] = useState([
    'มีปัญหาการนอน นอนไม่หลับหรือนอนมาก',
    'มีสมาธิน้อยลง',
    'หงุดหงิด/กระวนกระวาย/ว้าวุ่นใจ',
    'รู้สึกเบื่อ เซ็ง',
    'ไม่อยากพบปะผู้คน',
  ]);
  const [selected, setSelected] = useState([0, 0, 0, 0, 0]);
  const [result, setResult] = useState(-1);

  const handleGetResult = () => {
    let sum = 0;
    selected.map(item => {
      sum += item;
    });
    setResult(sum);
    console.log({sum});
  };

  const renderResultWithCondition = () => {
    if (result > 9) {
      return 'เครียดมากที่สุด';
    } else if (result > 7) {
      return 'เครียดมาก';
    } else if (result > 4) {
      return 'เครียดปานกลาง';
    } else {
      return 'เครียดน้อย';
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Health" alignment="center" />
        <Divider />
        <ScrollView>
          <Layout style={{flex: 1, padding: 16}}>
            <Text category="h5" style={{marginBottom: 16}}>
              Evaluation
            </Text>
            {questions.map((q, index) => (
              <View key={index}>
                <Text category="h6">{q}</Text>
                <RadioGroup
                  style={{marginBottom: 8}}
                  selectedIndex={selected[index]}
                  onChange={indexValue => {
                    setResult(-1);
                    setSelected(prev => {
                      let newArr = [];
                      prev.map((item, idx) => {
                        if (idx === index) {
                          newArr.push(indexValue);
                        } else {
                          newArr.push(item);
                        }
                      });
                      return newArr;
                    });
                  }}>
                  <Radio>ไม่เคย</Radio>
                  <Radio>บางครั้ง</Radio>
                  <Radio>ประจำ</Radio>
                </RadioGroup>
              </View>
            ))}
            <Button onPress={handleGetResult}>แสดงผลลัพธ์</Button>
            {result > -1 && (
              <>
                <Text category="h4" style={{marginTop: 16, marginBottom: 16}}>
                  ผลลัพธ์: {renderResultWithCondition()}
                </Text>
              </>
            )}
          </Layout>
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default HealthEvalScreen;

const styles = StyleSheet.create({});
