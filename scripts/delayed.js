// eslint-disable-next-line import/no-cycle
import { sampleRUM } from './aem.js';

// Core Web Vitals RUM collection
sampleRUM('cwv');

// add more delayed functionality here
let params = new URL(document.location.toString()).searchParams;
let query = params.get("email");
document.getElementById('email').value=query;

document.getElementById("storagetypeinfo-description").innerHTML = 'Click here for details on how to get S3/Blob Storage <a href="https://adobe.ly/3OpHtLK">adobe.ly/3OpHtLK<a>';

