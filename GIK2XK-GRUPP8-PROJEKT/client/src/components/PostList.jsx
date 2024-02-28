import PostItemSmall from "./PostItemSmall";

function PostList() {
  const posts = [
    {
      id: 1,
      title: "Vestibulum sed magna at nunc commodo placerat.",
      body: "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
      imageUrl: "http://dummyimage.com/705x600.png/dddddd/000000",
      createdAt: "2021-09-04T04:36:19.000Z",
      updatedAt: "2022-02-09T00:00:00.000Z",
      author: {
        id: 1,
        username: "mikaela",
        email: "mie@du.se",
        firstName: "Mikaela",
        lastName: "Hedberg",
        imageUrl: "https://users.du.se/~mie/common/images/mie.jpg",
      },
      tags: ["tagg4", "tagg2"],
    },
    {
      id: 2,
      title: "Etiam vel augue.",
      body: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
      imageUrl: "http://dummyimage.com/609x600.png/dddddd/000000",
      createdAt: "2021-04-12T10:22:14.000Z",
      updatedAt: "2022-02-09T00:00:00.000Z",
      author: {
        id: 1,
        username: "mikaela",
        email: "mie@du.se",
        firstName: "Mikaela",
        lastName: "Hedberg",
        imageUrl: "https://users.du.se/~mie/common/images/mie.jpg",
      },
      tags: ["tagg1"],
    },
    {
      id: 3,
      title: "Donec dapibus.",
      body: "Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
      imageUrl: "http://dummyimage.com/720x600.png/ff4444/ffffff",
      createdAt: "2021-10-29T14:06:05.000Z",
      updatedAt: "2022-02-09T00:00:00.000Z",
      author: {
        id: 1,
        username: "mikaela",
        email: "mie@du.se",
        firstName: "Mikaela",
        lastName: "Hedberg",
        imageUrl: "https://users.du.se/~mie/common/images/mie.jpg",
      },
      tags: ["tagg2"],
    },
    {
      id: 4,
      title: "Praesent lectus.",
      body: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
      imageUrl: "http://dummyimage.com/785x600.png/dddddd/000000",
      createdAt: "2021-05-27T03:06:00.000Z",
      updatedAt: "2022-02-09T00:00:00.000Z",
      author: {
        id: 2,
        username: "yoshi",
        email: "yoshi@du.se",
        firstName: "Yoshi",
        lastName: "Akterkvist",
        imageUrl: "https://users.du.se/~mie/common/images/yoshi.jpg",
      },
      tags: [],
    },
    {
      id: 5,
      title: "Suspendisse potenti.",
      body: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
      imageUrl: "http://dummyimage.com/637x600.png/5fa2dd/ffffff",
      createdAt: "2021-06-03T01:38:26.000Z",
      updatedAt: "2022-02-09T00:00:00.000Z",
      author: {
        id: 2,
        username: "yoshi",
        email: "yoshi@du.se",
        firstName: "Yoshi",
        lastName: "Akterkvist",
        imageUrl: "https://users.du.se/~mie/common/images/yoshi.jpg",
      },
      tags: [],
    },
    {
      id: 6,
      title: "Donec dapibus.",
      body: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      imageUrl: "http://dummyimage.com/719x600.png/ff4444/ffffff",
      createdAt: "2021-05-01T03:29:27.000Z",
      updatedAt: "2022-02-09T00:00:00.000Z",
      author: {
        id: 2,
        username: "yoshi",
        email: "yoshi@du.se",
        firstName: "Yoshi",
        lastName: "Akterkvist",
        imageUrl: "https://users.du.se/~mie/common/images/yoshi.jpg",
      },
      tags: [],
    },
    {
      id: 7,
      title:
        "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
      body: "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
      imageUrl: null,
      createdAt: "2021-06-22T22:42:14.000Z",
      updatedAt: "2022-02-09T00:00:00.000Z",
      author: {
        id: 1,
        username: "mikaela",
        email: "mie@du.se",
        firstName: "Mikaela",
        lastName: "Hedberg",
        imageUrl: "https://users.du.se/~mie/common/images/mie.jpg",
      },
      tags: [],
    },
    {
      id: 8,
      title:
        "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
      body: "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
      imageUrl: "http://dummyimage.com/695x600.png/dddddd/000000",
      createdAt: "2021-02-21T19:07:28.000Z",
      updatedAt: "2022-02-09T00:00:00.000Z",
      author: {
        id: 1,
        username: "mikaela",
        email: "mie@du.se",
        firstName: "Mikaela",
        lastName: "Hedberg",
        imageUrl: "https://users.du.se/~mie/common/images/mie.jpg",
      },
      tags: [],
    },
    {
      id: 9,
      title: "Nulla tellus.ddddd",
      body: "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
      imageUrl: "http://dummyimage.com/748x600.png/dddddd/000000",
      createdAt: "2021-11-19T00:53:27.000Z",
      updatedAt: "2024-01-15T13:18:43.000Z",
      author: {
        id: 2,
        username: "yoshi",
        email: "yoshi@du.se",
        firstName: "Yoshi",
        lastName: "Akterkvist",
        imageUrl: "https://users.du.se/~mie/common/images/yoshi.jpg",
      },
      tags: [],
    },
    {
      id: 10,
      title: "Pellentesque ultrices mattis odio.",
      body: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      imageUrl: "http://dummyimage.com/682x600.png/cc0000/ffffff",
      createdAt: "2021-04-05T22:04:29.000Z",
      updatedAt: "2022-02-09T00:00:00.000Z",
      author: {
        id: 1,
        username: "mikaela",
        email: "mie@du.se",
        firstName: "Mikaela",
        lastName: "Hedberg",
        imageUrl: "https://users.du.se/~mie/common/images/mie.jpg",
      },
      tags: [],
    },
  ];

  return (
    <ul>
      {posts?.length > 0 ? (
        posts.map((post) => (
          <li key={`posts_${post.id}`}>
            <PostItemSmall post={post} />
          </li>
        ))
      ) : (
        <h3>Kunde inte hämta inlägg</h3>
      )}
    </ul>
  );
}

export default PostList;
