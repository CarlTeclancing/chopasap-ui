import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SectionList,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const items = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
  ];

  const sections = [
    { title: 'Fruits', data: ['Apple', 'Banana', 'Mango'] },
    { title: 'Vegetables', data: ['Carrot', 'Tomato', 'Potato'] },
  ];

  const handleButtonPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert('Action Completed!');
    }, 2000);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>React Native UI</Text>
        <Image
          style={styles.logo}
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
      </View>

      {/* Input Section */}
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={setText}
      />

      {/* Button */}
      <Button title="Submit" onPress={handleButtonPress} />

      {/* TouchableOpacity */}
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => Alert.alert(`Hello, ${text || 'User'}!`)}
      >
        <Text style={styles.touchableText}>Press Me</Text>
      </TouchableOpacity>

      {/* Activity Indicator */}
      {loading && <ActivityIndicator size="large" color="blue" />}

      {/* FlatList */}
      <Text style={styles.sectionTitle}>FlatList:</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />

      {/* SectionList */}
      <Text style={styles.sectionTitle}>SectionList:</Text>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  logo: {
    width: 40,
    height: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  touchable: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  touchableText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#eaeaea',
    padding: 5,
  },
});

export default App;
