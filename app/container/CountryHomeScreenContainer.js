
import { connect } from 'react-redux';
import CountryHomeScreen from '../component/CountryProject/CountryHomeScreen';

const mapStateToProps = ({ CountryDataModel }) => ({
        countryData : CountryDataModel.countryData,
        weatherData: CountryDataModel.weatherData,
        isError: CountryDataModel.isError,
    });

const mapDispatchToProps = ({ CountryDataModel : {fetchWeatherData, fetchCountryData}}) => ({
    fetchWeatherData : (APIData) => fetchWeatherData(APIData),
    fetchCountryData: (APIData) => fetchCountryData(APIData)
})

const CountryHomeScreenContainer = connect(mapStateToProps,mapDispatchToProps)(CountryHomeScreen);

export default CountryHomeScreenContainer;
