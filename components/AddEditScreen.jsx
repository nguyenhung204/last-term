// AddEditScreen.jsx
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem, updateItem } from '../reduxtoolkit/store'; 

const AddEditScreen = ({ route, navigation }) => {
  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (route.params?.item) {
      const { item } = route.params;
      setInput(item.task);
      setEditId(item.id);
    }
  }, [route.params]);

  const handleAddOrUpdate = () => {
    if (editId) {
      dispatch(updateItem({ id: editId, task: input }));
     
    } else {
      dispatch(addItem({ task: input }));
    }
     setEditId(null)
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task"
        value={input}
        onChangeText={setInput}
      />
      <Button title={editId ? 'Update Item' : 'Add Item'} onPress={handleAddOrUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default AddEditScreen;
