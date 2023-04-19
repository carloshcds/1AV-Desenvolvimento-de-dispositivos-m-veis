import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const List = (props) => {
return (
<FlatList
keyExtractor={(item) => item.id}
data={props.items}
renderItem={(itemData) => (
<TouchableOpacity onPress={() => props.onPress(itemData.item.id)}>
<View style={{backgroundColor: '#f5f5f5', marginVertical: 5, padding: 10, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
<Text style={{fontSize: 18, fontWeight: 'bold'}}>{itemData.item.nome}</Text>
<AntDesign name="delete" size={24} color="#f44336" />
</View>
</TouchableOpacity>
)}
/>
);
};

export default function App() {
const [inputText, setInputText] = useState('');
const [filmes, setFilmes] = useState([]);

const adicionarFilme = () => {
setFilmes([...filmes, {id: Math.random().toString(), nome: inputText}]);
setInputText('');
};

const removerFilme = (id) => {
setFilmes(filmes.filter(filme => filme.id !== id));
};

return (
<SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
<ScrollView contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 30}}>
<View>
<Text style={{fontSize: 32, fontWeight: 'bold', marginBottom: 20}}>Meus Filmes</Text>
<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20}}>
<TextInput
placeholder="Adicionar filme"
style={{borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, flex: 1, marginRight: 10}}
onChangeText={setInputText}
value={inputText}
/>
<Button title="Adicionar" onPress={adicionarFilme} />
</View>
<List items={filmes} onPress={removerFilme} />
</View>
</ScrollView>
</SafeAreaView>
);
}




