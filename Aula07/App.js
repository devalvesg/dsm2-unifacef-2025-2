import React from 'react';
import { SectionList, Text, View, StyleSheet } from 'react-native';

const produtos = [
  {
    title: 'Eletrônicos',
    data: [
      { id: 1, nome: 'iPhone 15 Pro', preco: 7999.00 },
      { id: 2, nome: 'Samsung Galaxy S24', preco: 5999.00 },
      { id: 3, nome: 'MacBook Air M3', preco: 9999.00 },
      { id: 4, nome: 'iPad Pro', preco: 6999.00 },
    ]
  },
  {
    title: 'Roupas',
    data: [
      { id: 5, nome: 'Camiseta Nike Dri-FIT', preco: 149.90 },
      { id: 6, nome: 'Calça Jeans Levis', preco: 399.90 },
      { id: 7, nome: 'Jaqueta Adidas', preco: 599.90 },
      { id: 8, nome: 'Tênis Nike Air Max', preco: 799.90 },
    ]
  },
  {
    title: 'Móveis',
    data: [
      { id: 9, nome: 'Sofá Retrátil 3 Lugares', preco: 2999.00 },
      { id: 10, nome: 'Mesa de Jantar 6 Cadeiras', preco: 1899.00 },
      { id: 11, nome: 'Rack para TV', preco: 899.00 },
      { id: 12, nome: 'Guarda-Roupa 6 Portas', preco: 1999.00 },
    ]
  },
  {
    title: 'Esportes',
    data: [
      { id: 13, nome: 'Whey Protein 900g', preco: 129.90 },
      { id: 14, nome: 'Bicicleta Mountain Bike', preco: 2499.00 },
      { id: 15, nome: 'Esteira Elétrica', preco: 1899.00 },
      { id: 16, nome: 'Bola de Futebol Oficial', preco: 199.90 },
    ]
  },
];

export default function CatalogoProdutos() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={produtos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nomeProduto}>{item.nome}</Text>
            <Text style={styles.precoProduto}>
              R$ {item.preco.toFixed(2).replace('.', ',')}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        )}
        stickySectionHeadersEnabled={true}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  headerText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 2,
  },
  nomeProduto: {
    fontSize: 16,
    color: '#1f2937',
    flex: 1,
    fontWeight: '500',
  },
  precoProduto: {
    fontSize: 18,
    fontWeight: '700',
    color: '#059669',
    marginLeft: 12,
  },
});