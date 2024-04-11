document.getElementsByTagName('button')[0].addEventListener('click',(e)=>{
    e.preventDefault()
    const name = document.querySelectorAll('input')[0].value;
    const age = document.querySelectorAll('input')[1].value;
    const file = document.querySelectorAll('input')[2].files[0];

  const dataSet = new FormData(); // Use FormData for multipart uploads
  dataSet.append('name', name);
  dataSet.append('age', age);
  dataSet.append('file', file);

  fetch('http://localhost:3000/upload', {
    method: 'POST',
    body: dataSet
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Error uploading file');
    }
    return response.text();
  })
  .then(data => {
    alert(data); // Alert message from server
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Failed to upload file');
  });

})