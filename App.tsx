import React, { useState, useEffect } from "react";
import {
  View, 
  Text,
  Button,
  FlatList,
  Image,
  ActivityIndicator
} from "react-native";
import { styles } from "./assets/styles/style";

const App = () => {

  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    setLoading(true);

    const requestMovies = async () => {
      const req = await fetch("https://api.b7web.com.br/cinema/");
      const json = await req.json();

      if(json) {
        setMovies(json);
      }
      setLoading(false);
    }

    requestMovies();
  }, []);


  return (
    <View style={styles.container}>
      {loading &&
        <View style={styles.loadingArea}>
          <ActivityIndicator size="large" color="#FFF" />
          <Text style={styles.loadingText}>Carregando...</Text>
        </View>
      }

      {!loading && 
        <>
          <Text style={styles.totalMoviesText}>Total de Filmes: {movies.length}</Text>
          <FlatList 
            style={styles.list}
            data={movies}
            renderItem={({item}) => (
              <View style={styles.movieItem}>
                <Image source={{uri: item.avatar}} 
                        style={styles.movieImage}
                        resizeMode="contain"
                />
                <Text style={styles.movieTitle}>{item.titulo}</Text>
              </View>
            )}
            keyExtractor={item => item.titulo} 
          />
        </>
      }
      

    </View>
  );
}

export default App;
