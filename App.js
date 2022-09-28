import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function LoginScreen({ navigation }) {

  const [usuario, setId] = useState("");
  const [number, setSenha] = useState("");
  const [login, setLogin] = useState("");

  function Login(usuario, number){
    if(usuario == 'Admin' && number == '123'){
      setLogin('Login com sucesso')
      return navigation.navigate('Home')
    }else{
      setLogin('Login errado')
    }
  }

  return (
    <View style={styles.container}>
        <View style={styles.titulo}>
          <Text>Faça o login:</Text>
        </View>
        <View style={{margin:15}}>
              <Text> Usuario:  </Text>          
              <TextInput              
                style={styles.caixaDeTexto}
                placeholder='Digite seu usuário'
                autoFocus={true}
                keyboardType={'text'}

                onChangeText = {usuario =>setId(usuario)}
              />            
        </View>   

        <View style={{margin:15}}>
              <Text> Senha:  </Text>          
              <TextInput              
                style={styles.caixaDeTexto}
              placeholder='Digite sua senha'
                autoFocus={true}
                keyboardType={'text'}

                onChangeText = {number =>setSenha(number)}
              />            
        </View>

        <View style={{margin:15}}>
            <Button title={'Logar'} onPress={() => Login(usuario, number)}/>
            <Text>{login}</Text>
        </View>
      </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pagina inicial</Text>
      <Button
        title="Sair"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Detalhes"
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title="Fotos"
        onPress={() => navigation.navigate('Fotos')}
      />
      <Button
        title="Projetos"
        onPress={() => navigation.navigate('Projetos')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de detalhes</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function FotosScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de fotos</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function ProjetosScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Tela de Projetos</Text>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Projetos" component={ProjetosScreen} />
        <Stack.Screen name="Fotos" component={FotosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9e9e9',
  },
  titulo: {
    fontSize: 25,
    color:'#008584',
  },
  caixaDeTexto: {
    backgroundColor: '#1E90FF',
  }
});