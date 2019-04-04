

document.addEventListener('DOMContentLoaded', () => {

  var fetchButton = document.getElementById('fetch-title');
  var title = document.getElementById('title');
  var summary = document.getElementById('summary');
  var seriesName = document.getElementById('series-name');

  fetchButton.addEventListener('click', function() {
    axios.get('/tv?name=' + seriesName.value)
    .then(function(result) {
      console.log(result);
      title.innerHTML = result.data.name;
      summary.innerHTML = result.data.summary;
    })
    .catch(function(err) {
      console.log(err);
    })
  })
  console.log('IronGenerator JS imported successfully!');

}, false);
