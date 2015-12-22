'use strict';

module.exports = /*@ngInject*/
  function chroniclesController($scope, $state) {
    $scope.activeTab = $state.current.name;

    var mockContent = [
      {
        title: 'Trip to San Diego',
        category: 'adventures',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'Kinetic Cinematography',
        category: 'tools & techniques',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'Bloopy',
        category: 'adventures',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'PuppyCat',
        category: 'aerials',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'bizzz',
        category: 'corporate',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'Meow',
        category: 'gear',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      },
      {
        title: 'Blah',
        category: 'tools & techniques',
        image: 'http://placehold.it/700x450',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia delectus, eum quod minima vel error incidunt laborum voluptatibus magni nobis tenetur id eius voluptatem fugiat adipisci quia odit at? Reiciendis.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus voluptatum aliquam magnam minus magni doloribus libero ducimus, assumenda vitae distinctio cupiditate, soluta rerum perspiciatis voluptatibus suscipit, neque deleniti esse odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore in, facilis adipisci. Optio quisquam ab sint consequuntur recusandae hic architecto vel, aliquid expedita accusantium, eveniet totam laudantium eius magnam omnis.'
      }
    ];

    $scope.articles = mockContent;

  };
