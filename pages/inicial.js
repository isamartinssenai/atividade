import Container from "../componentes/container";
import Titulo from "../componentes/titulo";
import Botao from "../componentes/botao";
import Backgroung from "../componentes/background";
import Texto from "../componentes/texto";
import { Alert, Image, View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('window');

export default function Home({ navigation }) {
  return (
    <Backgroung>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Container>
          <View style={styles.header}>
            <View style={styles.headerOverlay} />
            <Image 
              source={require("../assets/imagens/logo.png")} 
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          {/* Card de boas-vindas */}
          <View style={styles.welcomeCard}>
            <Text style={styles.welcomeEmoji}>📚</Text>
            <Text style={styles.welcomeTitle}>Bem-vindo à sua livraria</Text>
            <Text style={styles.welcomeText}>
              Um espaço dedicado aos amantes da leitura. Aqui você pode explorar, 
              descobrir novos mundos e fazer parte da nossa comunidade literária.
            </Text>
          </View>

          {/* Sobre a livraria */}
          <View style={styles.aboutCard}>
            <Text style={styles.aboutTitle}>Sobre a Parágrafo 42</Text>
            <Text style={styles.aboutText}>
              Fundada em 2020, a Parágrafo 42 nasceu da paixão por livros e histórias. 
              Somos mais que uma livraria, somos um ponto de encontro para mentes curiosas 
              e corações sonhadores. Nosso espaço é cuidadosamente pensado para criar 
              momentos únicos de conexão com a literatura.
            </Text>
            
            <View style={styles.featuresGrid}>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>📖</Text>
                <Text style={styles.featureText}>Acervo selecionado</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>☕</Text>
                <Text style={styles.featureText}>Café literário</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>🎭</Text>
                <Text style={styles.featureText}>Clube do livro</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureIcon}>✍️</Text>
                <Text style={styles.featureText}>Encontro com autores</Text>
              </View>
            </View>
          </View>

          {/* Seção de cadastro (apenas informativa) */}
          <View style={styles.cadastroCard}>
            <View style={styles.cadastroHeader}>
              <Text style={styles.cadastroIcon}>✨</Text>
              <Text style={styles.cadastroTitle}>Contribua com nosso acervo</Text>
            </View>
            <Text style={styles.cadastroText}>
          Ajude a expandir nossa coleção! Na Parágrafo 42, você pode cadastrar 
              livros para compartilhar com outros leitores. Basta acessar a opção 
              "Cadastrar Livro" no menu e preencher as informações da sua obra favorita.
            </Text>
            <View style={styles.cadastroHighlight}>
              <Text style={styles.highlightIcon}>📌</Text>
              <Text style={styles.highlightText}>
                Novos cadastros são revisados e adicionados ao acervo em até 24h
              </Text>
            </View>
          </View>

          {/* Destaques visuais */}
          <View style={styles.showcaseSection}>
            <View style={styles.showcaseHeader}>
              <Text style={styles.showcaseTitle}>Momentos da nossa livraria</Text>
              <View style={styles.dividerSmall} />
            </View>
            
            <View style={styles.showcaseGrid}>
              <View style={styles.showcaseItem}>
                <Text style={styles.showcaseEmoji}>📸</Text>
                <Text style={styles.showcaseLabel}>Cantinho da leitura</Text>
              </View>
              <View style={styles.showcaseItem}>
                <Text style={styles.showcaseEmoji}>🎉</Text>
                <Text style={styles.showcaseLabel}>Lançamentos</Text>
              </View>
              <View style={styles.showcaseItem}>
                <Text style={styles.showcaseEmoji}>📦</Text>
                <Text style={styles.showcaseLabel}>Clube de assinatura</Text>
              </View>
              <View style={styles.showcaseItem}>
                <Text style={styles.showcaseEmoji}>🎁</Text>
                <Text style={styles.showcaseLabel}>Presentes literários</Text>
              </View>
            </View>
          </View>


          {/* Frase inspiradora */}
          <View style={styles.quoteContainer}>
            <Text style={styles.quoteMark}>"</Text>
            <Text style={styles.quoteText}>
              Um livro é um presente que você pode abrir várias vezes
            </Text>
            <Text style={styles.quoteAuthor}>- Parágrafo 42</Text>
          </View>
        </Container>
      </ScrollView>
    </Backgroung>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#F5F0E8', // Tom claro de marrom
    borderRadius: 30,
    shadowColor: '#8B5A2B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  logo: {
    height: 120,
    width: 214,
  },
  nomeLivraria: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B5A2B', // Marrom principal
    letterSpacing: 1,
    marginBottom: 10,
    textShadowColor: '#D2B48C',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  divider: {
    width: 80,
    height: 3,
    backgroundColor: '#D2B48C', // Marrom claro
    borderRadius: 2,
    marginBottom: 15,
  },
  slogan: {
    fontSize: 18,
    color: '#A67B5B', // Marrom médio
    fontStyle: 'italic',
    textAlign: 'center',
  },
  welcomeCard: {
    backgroundColor: '#FFF8F0', // Off-white com tom quente
    borderRadius: 25,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6D5B8',
    shadowColor: '#8B5A2B',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 350, // Largura fixa
    minHeight: 200,
  },
  welcomeEmoji: {
    fontSize: 50,
    marginBottom: 15,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#8B5A2B',
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  aboutCard: {
    backgroundColor: '#FFF',
    borderRadius: 25,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#8B5A2B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    width: 350, // Largura fixa
    minHeight: 200,
  },
  aboutTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5A2B',
    marginBottom: 15,
    textAlign: 'center',
  },
  aboutText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 26,
    textAlign: 'justify',
    marginBottom: 20,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
    welcomeCard: {
}
  },
  featureItem: {
    width: '48%',
    backgroundColor: '#F5F0E8',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 28,
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    color: '#8B5A2B',
    textAlign: 'center',
    fontWeight: '500',
  },
  cadastroCard: {
    backgroundColor: '#F5E6D3', // Tom mais claro de marrom
    borderRadius: 25,
    padding: 25,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#D2B48C',
    width: 350, // Largura fixa
    minHeight: 200,
  },
  cadastroHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cadastroIcon: {
    fontSize: 28,
    marginRight: 10,
  },
  cadastroTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#8B5A2B',
    flex: 1,
  },
  cadastroText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 20,
  },
  cadastroHighlight: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
  },
  highlightIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  highlightText: {
    fontSize: 14,
    color: '#8B5A2B',
    flex: 1,
    fontStyle: 'italic',
  },
  showcaseSection: {
    marginBottom: 20,
  },
  showcaseHeader: {
    alignItems: 'center',
    marginBottom: 15,
  },
  showcaseTitle: {
    fontSize: 20,
    color: '#8B5A2B',
    fontWeight: '600',
    marginBottom: 10,
  },
  dividerSmall: {
    width: 50,
    height: 2,
    backgroundColor: '#D2B48C',
  },
  showcaseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Mude de 'space-between' para 'center'
    gap: 10, // Adicione um espaçamento entre os cards (opcional)
},
  showcaseItem: {
    backgroundColor: '#FFF8F0',
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E6D5B8',
    width: 150, // Largura fixa
    minHeight: 50,
  },
  showcaseEmoji: {
    fontSize: 36,
    marginBottom: 10,
  },
  showcaseLabel: {
    fontSize: 14,
    color: '#8B5A2B',
    fontWeight: '500',
  },

  quoteContainer: {
    alignItems: 'center',
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: '#F5F0E8',
    borderRadius: 25,
    marginBottom: 20,
    position: 'relative',
    width: 350,
    minHeight: 90,
  },
  quoteMark: {
    fontSize: 60,
    color: '#D2B48C',
    position: 'absolute',
    top: 5,
    left: 20,
    opacity: 0.5,
  },
  quoteText: {
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#8B5A2B',
    lineHeight: 28,
    paddingHorizontal: 30,
    marginBottom: 10,
  },
  quoteAuthor: {
    fontSize: 16,
    color: '#A67B5B',
    fontWeight: '500',
  },
  actionButtons: {
    gap: 10,
    marginBottom: 20,
  },
  primaryButton: {
    backgroundColor: '#8B5A2B',
    paddingVertical: 15,
    borderRadius: 15,
  },
  secondaryButton: {
    backgroundColor: '#F5E6D3',
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#8B5A2B',
  },
});