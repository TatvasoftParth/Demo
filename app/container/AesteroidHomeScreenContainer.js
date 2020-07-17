
import { connect } from 'react-redux';
import AsteroidHomeScreen from '../component/AsteroidProject/AsteroidHomeScreen';

const mapStateToProps = ({ AsteroidDataModel }) => ({
        asteroidIds : AsteroidDataModel.asteroidIds,
        asteroidDetails: AsteroidDataModel.asteroidDetails,
        isError: AsteroidDataModel.isError,
    });

const mapDispatchToProps = ({ AsteroidDataModel : {fetchAllAsteroidIds, fetchAsteroidDetails}}) => ({
    fetchAllAsteroidIds : (APIData) => fetchAllAsteroidIds(APIData),
    fetchAsteroidDetails: (APIData) => fetchAsteroidDetails(APIData)
})

const AsteroidHomeScreenContainer = connect(mapStateToProps,mapDispatchToProps)(AsteroidHomeScreen);

export default AsteroidHomeScreenContainer;
