// HomeScreen.jsx
import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, deleteItem } from '../reduxtoolkit/store';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector(state => state.test);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CRUD App with API</Text>
         
    
      <Button title="Add Item" onPress={() => navigation.navigate('AddEdit')} />
      {error && <Text style={styles.error}>{error}</Text>}
      <FlatList
        style = {{
          marginTop : 50
        }}
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
       
          <View style={styles.item}>

            <View style = {{
              width :100,
            }}>
                <Image
            source={{
              uri:item.task,
            }}
          style={{ width: 100, height: 100 }}
            />
                        </View>
                        <Button title="Edit" onPress={() => navigation.navigate('AddEdit', { item })} />
                        <Button title="Delete" onPress={() => handleDelete(item.id)} />
                      </View>
                    )}
                  />
                </View>
              );
            };

      const styles = StyleSheet.create({
        container: { flex: 1, padding: 20 },
        title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
        error: { color: 'red', marginTop: 10 },
        item: {flexDirection : 'row', marginBottom : 20, justifyContent : "space-between" },
      });

export default HomeScreen;
