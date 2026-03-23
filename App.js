import React, {useState} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert,
    SafeAreaView,
} from 'react-native';

export default function App(){
    // --- ESTADOS ---
    const [tela,setTela] = useState('home');
    const [nome, setNome] = useState('');

    // Estados das Notas (Strings para o TextInput)
    const [nota1, setNota1] = useState('');
    const [nota2, setNota2] = useState('');
    const [nota3, setNota3] = useState('');
    const [resultado, setResultado] = 
    useState(null);

    const MEDIA_MINIMA = 6.0;

    // --- LÓGICA DE CÁLCULO ----


}
