import React, {useEffect, useState} from 'react';
import axios, {HttpStatusCode} from 'axios';
import Navigation from './Navigation';
import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {style} from './styles';
import AddData from './AddData';
type Task = {
  id: number;
  taskName: string;
  isCompleted: boolean;
};
const url = 'https://649bc4d2048075719236e4ee.mockapi.io/api/Task1';
function DemoApi({navigation}:any) {
  const [listData, setListdata] = useState<Task[]>();
  const fetchtaskDetails = async () => {
    try {
      const res = await axios.get(url);
      setListdata(res.data);
      console.log(listData);
    } catch (e) {
      console.log(e);
    }
  };
  const editTaskDetails = async (id: number) => {
    try {
      const getTaskById = async (id: number) => {
        try {
          const res = await axios.get(
            'https://649bc4d2048075719236e4ee.mockapi.io/api/Task1/' + id,
          );
          console.log(res.data);
        } catch {}
      };
    } catch (e) {}
  };
  const deleteTaskDetails = async (id: number) => {
    try {
      //console.log(id)
      const res = await axios.delete(
        'https://649bc4d2048075719236e4ee.mockapi.io/api/Task1/' + id,
      );
      if (res.status == 200) Alert.alert('Item Deleted');
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchtaskDetails();
  }, [deleteTaskDetails,AddData]);

  return (
    <View>
      <Text>DemoApi</Text>
      <Button title="getdata" onPress={() => fetchtaskDetails()} />
      <FlatList
        data={listData}
        renderItem={({item}) => {
          return (
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={style.item}>
                {item.id} {item.taskName} {JSON.stringify(item.isCompleted)}
              </Text>
              <TouchableOpacity onPress={() => editTaskDetails(item.id)}>
                <Text style={style.button}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTaskDetails(item.id)}>
                <Text style={style.button}>Delete</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

export default DemoApi;
