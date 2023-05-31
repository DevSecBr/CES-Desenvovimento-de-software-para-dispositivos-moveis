import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInput } from 'react-native';

export default function CompaniesListPage() {
    const navigation = useNavigation();

    const [companies, setCompanies] = useState([]);
    const [filteredCompanies, setFilteredCompanies] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [sortBy, setSortBy] = useState('name');

    useEffect(() => {
        // Lógica para buscar as empresas do banco de dados e armazená-las no estado "companies"
        fetchCompanies();
    }, []);

    const fetchCompanies = () => {
        // Simulação da busca das empresas 
        const dummyCompanies = [
            {
                id: 1,
                name: 'Empresa 1',
                industry: 'Indústria 1',
                location: 'Localização 1',
            },
            {
                id: 2,
                name: 'Empresa 2',
                industry: 'Indústria 2',
                location: 'Localização 2',
            },
            // Adicionar mais empresas       
        ];

        setCompanies(dummyCompanies);
        setFilteredCompanies(dummyCompanies);
    };

    const handleViewCompanyDetails = (company) => {
        navigation.navigate('CompanyDetails', { company });
    };

    const handleGoBackToMain = () => {
        navigation.navigate("Dashboard");
    };

    const handleEditCompany = (company) => {
        navigation.navigate('EditCompany', { company });
    };

    const handleDeleteCompany = (company) => {
        Alert.alert(
            'Confirmação',
            `Deseja excluir a empresa "${company.name}"?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                { text: 'Excluir', onPress: () => deleteCompany(company) },
            ],
            { cancelable: true }
        );
    };

    const deleteCompany = (company) => {
        // Lógica para excluir a empresa do banco de dados
        // Atualize o estado "companies" e "filteredCompanies" removendo a empresa excluída

        const updatedCompanies = companies.filter((item) => item.id !== company.id);
        setCompanies(updatedCompanies);
        setFilteredCompanies(updatedCompanies);
    };

    const handleSearch = () => {
        // Lógica para filtrar as empresas com base no texto de pesquisa
        const filtered = companies.filter((company) =>
            company.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredCompanies(filtered);
    };

    const handleSort = (field) => {
        // Lógica para ordenar as empresas com base no campo selecionado (name ou industry)
        const sorted = [...filteredCompanies].sort((a, b) => {
            if (a[field] < b[field]) return -1;
            if (a[field] > b[field]) return 1;
            return 0;
        });
        setFilteredCompanies(sorted);
        setSortBy(field);
    };

    const renderCompanyItem = ({ item }) => (
        <TouchableOpacity
            style={styles.companyItem}
            onPress={() => handleViewCompanyDetails(item)}
            onLongPress={() => handleDeleteCompany(item)}
        >
            <Text style={styles.companyName}>{item.name}</Text>
            <Text style={styles.companyIndustry}>{item.industry}</Text>
            <Text style={styles.companyLocation}>{item.location}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleGoBackToMain} style={styles.backButton}>
                <Text style={styles.backButtonText}>← Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Lista de Empresas</Text>

            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholder="Pesquisar empresas"
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <Text style={styles.searchButtonText}>Pesquisar</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.sortContainer}>
                <Text style={styles.sortLabel}>Ordenar por:</Text>
                <TouchableOpacity
                    style={[styles.sortOption, sortBy === 'name' && styles.sortOptionSelected]}
                    onPress={() => handleSort('name')}
                >
                    <Text style={styles.sortOptionText}>Nome</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.sortOption, sortBy === 'industry' && styles.sortOptionSelected]}
                    onPress={() => handleSort('industry')}
                >
                    <Text style={styles.sortOptionText}>Indústria</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filteredCompanies}
                renderItem={renderCompanyItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.companyList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    
    backButton: {
        position: 'absolute',
        top: 20,
        left: 10,
        marginTop: 10,
        marginLeft: 10,
    },
    
    backButtonText: {
        fontSize: 16,
        color: '#4834DF',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 10,
        color: '#4834DF',
    },
    
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    searchInput: {
        flex: 1,
        height: 40,
        fontSize: 16,
        color: '#000',
        marginLeft: 10,
    },
    searchButton: {
        marginLeft: 10,
        paddingHorizontal: 15,
        paddingVertical: 8,
        backgroundColor: '#4834DF',
        borderRadius: 5,
    },
    searchButtonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF',
    },
    sortContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    sortLabel: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    sortOption: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#F2F2F2',
        borderRadius: 5,
        marginRight: 10,
    },
    sortOptionSelected: {
        backgroundColor: '#4834DF',
    },
    sortOptionText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
    },
    companyList: {
        flexGrow: 1,
        padding: 10,
    },
    
    companyItem: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        paddingVertical: 15,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    companyName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#4834DF',
    },
    companyIndustry: {
        fontSize: 16,
        marginBottom: 5,
        color: '#000',
    },
    companyLocation: {
        fontSize: 16,
        color: '#000',
    },
    
});
