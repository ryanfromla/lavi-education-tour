//Data Structure
var solutions = [ 
	{
		"styleSheet":"styleSheet Name",
		"categories":[
			{
			"title":"Bookstore",//Home Page
			"url": "bookstore",
				"headerText":"1 This is placeholder header text",
				"thumbImage":"https://www.lavi.com/upload/CustomFiles/education/img/main.jpg",//Big Image
				"categoryDescription":{
					"paragraphs":[
						"text goes here. add HTML if desired <ul class=\"ul-class-1\"><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>",
						"text goes here. add HTML if desired <ul class=\"ul-class-1\"><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
			},{
		"title":"Stadium",
		"url": "stadium",
				"headerText":"2 This is placeholder header text",
				"thumbImage":"http://via.placeholder.com/300x300",
				"categoryDescription":{
					"paragraphs":[
						"text goes here. add HTML if desired <ul><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>",
						"text goes here. add HTML if desired <ul><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				},
			},{
				"title":"Restaurant",
				"headerText":"This is placeholder header text",
				"thumbImage":"http://via.placeholder.com/300x300",
				"categoryDescription":{
					"paragraphs":[
						"text goes here. add HTML if desired <ul><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>",
						"text goes here. add HTML if desired <ul><li>Lorem Ipsum dolor sit amet</li><li>Consectetur adipisicing elit, sed do</li></ul>"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
			}
		],
		"content":[ //small images
			{
		"id": "0",
		"url": "bookstore",
				"title":"Solution 1",
				"description":"description 1",
				"categories":["Bookstore"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"http://via.placeholder.com/149x149",
				"content":{
					"paragraphs":[
						`This is the first paragraph for Solution 1. Add list elements later`,
						"This is the second paragraph. for Solution 1. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path": 'https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg'//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
			},
			{
		"id": "1",
		"title":"Solution 2",
		"url": "digitalsign",
		"description":"description 2",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 2. Add list elements later",
						"This is the second paragraph for Solution 2. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Digital-Sign.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "2",
		"title":"Solution 3",
		"url": "electronicqueue",
		"description":"description 3",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 3. Add list elements later",
						"This is the second paragraph for Solution 3. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Electronic-Queuing.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "3",
		"title":"Solution 4",
		"url": "inqueue",
		"description":"description 4",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 4. Add list elements later",
						"This is the second paragraph for Solution 4. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/in-queue.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "4",
		"title":"Solution 5",
		"url": "instore",
		"description":"description 5",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 5. Add list elements later",
						"This is the second paragraph for Solution 5. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/in-store.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "5",
		"title":"Solution 6",
		"url": "checkoutqueue",
		"description":"description 6",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 6. Add list elements later",
						"This is the second paragraph for Solution 6. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Checkout-Queue.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "6",
		"title":"Solution 7",
		"url": "teamspirit",
		"description":"description 7",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "7",
		"title":"Solution 8",
		"url": "8",
		"description":"description 8",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "8",
		"title":"Solution 9",
		"url": "9",
		"description":"description 9",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "9",
		"title":"Solution 10",
		"url": "10",
		"description":"description 10",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "10",
		"title":"Solution 11",
		"url": "11",
		"description":"description 11",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "11",
		"title":"Solution 12",
		"url": "12",
		"description":"description 12",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "12",
		"title":"Solution 13",
		"url": "13",
		"description":"description 13",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "13",
		"title":"Solution 14",
		"url": "14",
		"description":"description 14",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "14",
		"title":"Solution 15",
		"url": "15",
		"description":"description 15",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "15",
		"title":"Solution 16",
		"url": "16",
		"description":"description 16",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "16",
		"title":"Solution 17",
		"url": "17",
		"description":"description 17",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
		},
		{
		"id": "17",
		"title":"Solution 18",
		"url": "18",
		"description":"description 18",
				"categories":["Bookstore", "Stadium", "Restaurant"],
				"homeImage":"http://via.placeholder.com/1200x750",
				"thumbImage":"../img/In-store.jpg",
				"content":{
					"paragraphs":[
						"This is the first paragraph for Solution 7. Add list elements later",
						"This is the second paragraph for Solution 7. Add list elements later"
					],
					"images":[//initially, all images are in right orientation. Secondary and tirnary releases can switch orientations and edit size
						{
							"path":"https://www.lavi.com/upload/CustomFiles/education/img/Team-Spirit.jpg"//,
							//"orientation":"left",
							//"size":{
							//	"height":"20%",
							//	"width":"20%"
							//}
						},
						{
							"path":"http://via.placeholder.com/150x150"//,
							//"orientation":"right",
							//"size":{
							//	"height":"20%",
							//"width":"20%"
							//}
						}
					],
					"form":{
						"link":"pardot address",
						"fields":{
							"name":"your name",//default for user
							"email":"you@example.com",//default for user
							"industry":"education"//defaulted, hidden from user
						}
					}
				}
			}
		]
	}
]

module.exports.solutions = solutions;

