import axios from 'axios'

//Github has restriction for unauthorized api requests
//Global configuration for all request
axios.defaults.headers.common[ 'Authorization' ] 		= 'Basic ' + btoa("anand6588:16509cd662df26d881e81532cf86bc3bed981043");

export const get = ( url ) => {
		return axios( url ).then( response => response.data ).catch( error => { throw error } );
}