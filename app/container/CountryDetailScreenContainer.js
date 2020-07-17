import { connect } from 'react-redux';
import CountryDetailScreen from '../component/CountryProject/CountryDetailScreen';

const mapStateToProps = ({ CountryDataModel }) => ({
        countryData : CountryDataModel.countryData,
        weatherData: CountryDataModel.weatherData,
        isError: CountryDataModel.isError,
    });

const mapDispatchToProps = ({ CountryDataModel : {fetchWeatherData, fetchCountryData}}) => ({
    fetchWeatherData : (APIData) => fetchWeatherData(APIData),
    fetchCountryData: (APIData) => fetchCountryData(APIData)
})

const CountryDetailScreenContainer = connect(mapStateToProps,mapDispatchToProps)(CountryDetailScreen);

export default CountryDetailScreenContainer;