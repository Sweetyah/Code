import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Platform} from 'react-native';
import {Layout, List, ListItem, Divider} from '@ui-kitten/components';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';

const EMSScreen = () => {
  const [ems, setEms] = React.useState([
    {
      name: 'สถาบันการแพทย์ฉุกเฉินแห่งชาติ',
      tel: '1669',
    },
    {
      name: 'สิทธิหลักประกันสุขภาพ (สปสช.)',
      tel: '1330',
    },
    {
      name: 'ประกันสังคม',
      tel: '1506',
    },
    {
      name: 'กรมควบคุมโรค',
      tel: '1422',
    },
    {
      name: 'ปรึกษาปัญหาสุขภาพจิต',
      tel: '1323',
    },
    {
      name: 'ศูนย์เอราวัณ สำนักการแพทย์',
      tel: '1646',
    },
    {
      name: 'หน่วยแพทย์กู้ชีวิต วชิรพยาบาล',
      tel: '1554',
    },
    {
      name: 'โรงพยาบาลตำรวจ',
      tel: '1691',
    },
    {
      name: 'ศูนย์พิษวิทยา โรงพยาบาลรามาธิบดี',
      tel: '1367',
    },
    {
      name: 'สายด่วนกรมสุขภาพจิต',
      tel: '1667',
    },
    {
      name: 'สายด่วนสำนักงานคณะกรรมการอาหารและยา',
      tel: '1556',
    },
    {
      name: 'สำนักงานอาสากาชาด สภากาชาดไทย',
      tel: '1665',
    },
    {
      name: 'สายด่วนศูนย์รับบริจาคอวัยวะ สภากาชาติไทย',
      tel: '1666',
    },
    {
      name: 'สายด่วนมะเร็ง สถาบันมะเร็งแห่งชาติ กรมการแพทย์',
      tel: '1668',
    },
  ]);

  const renderItem = ({item, index}) => (
    <ListItem
      onPress={async () => {
        console.log('on press phone list');
        if (Platform.OS === 'android') {
          let response = await request(PERMISSIONS.ANDROID.CALL_PHONE);
          console.log({response});

          switch (response) {
            case RESULTS.UNAVAILABLE:
              console.log(
                'This feature is not available (on this device / in this context)',
              );
              break;
            case RESULTS.DENIED:
              console.log(
                'The permission has not been requested / is denied but requestable',
              );
              break;
            case RESULTS.GRANTED:
              console.log('The permission is granted');
              RNImmediatePhoneCall.immediatePhoneCall(item.tel);
              break;
            case RESULTS.BLOCKED:
              console.log(
                'The permission is denied and not requestable anymore',
              );
              break;
          }
        }
      }}
      title={item.tel ? item.tel : ''}
      description={item.name ? item.name : ''}
    />
  );

  return (
    // <View>
    //   <Text>EMS</Text>
    // </View>
    <SafeAreaView style={{flex: 1}}>
      <>
        <Layout style={{flex: 1}}>
          <List
            data={ems}
            ItemSeparatorComponent={Divider}
            renderItem={renderItem}
          />
        </Layout>
      </>
    </SafeAreaView>
  );
};

export default EMSScreen;

const styles = StyleSheet.create({});
