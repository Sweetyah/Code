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

const FoodEvalScreen = () => {
  const [questions, setQuestions] = useState([
    'ดื่มน้ำเปล่า แทนน้ำอัดลม',
    'กินอาหารจำพวกเนื้อสัตว์หรือจำพวกผัก',
    'กินอาหารครบ 5 หมู่',
    'หลีกเลยงอาหารไขมันสูง',
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
      return 'ปกติ';
    } else if (result > 7) {
      return 'ค่อนข้างปกติ';
    } else if (result > 4) {
      return 'ค่อนข้างผิดปกติ';
    } else {
      return 'ผิดปกติ';
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <TopNavigation title="Food" alignment="center" />
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

export default FoodEvalScreen;

const styles = StyleSheet.create({});
