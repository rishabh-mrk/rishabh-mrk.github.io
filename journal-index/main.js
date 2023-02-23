journalDetails = {
	'Abhimanyu_Rana': 'https://abhimanyumirketa.github.io/journal.html',
	'Abhiu_Garg': 'https://abhiugargmirketa.github.io/journal.html',
	'Aman_Kumar': 'https://amankumarmirketa.github.io/journal.html',
	'Ashutosh_Singh': 'https://ashutoshmirketa.github.io/journal.html',
	'Avinash_Patel': 'https://avinashmirketa.github.io/journal.html',
	'Ayush_Misra': 'https://ayushmirketa.github.io/Journal.html',
	'Devang_Tiwari': 'https://devangmirketa.github.io/journal.html',
	'Ayushi_Kotiyal': 'https://ayushimirketa.github.io/journal.html'
	'Harshit_Kandpal': 'https://harshitkandpalmirketa.github.io/Journal.html',
	'Harshit_Kumar': 'https://harshitkumarmirketa.github.io/journal.html',
	'Jay_Pratap': 'https://jaypratapmirketa.github.io/journal.html',
	'Mahim_Kumar': 'https://mahimmirketa.github.io/journal.html',
	'Mayank_Raj': 'https://mayankrajmirketa.github.io/journal.html',
    'Moris_Ahmad': 'https://morisahmadmirketa.github.io/Journal.html',
	'Pallavi_Suresh_Verma': 'https://pallavimirketa.github.io/Journal.html',
	'Pragam_Kaistha': 'https://pragammirketa.github.io/journal.html',
	'Prashant_Singh': 'https://prashantsinghmirketa.github.io/Journal.html',
	'Pushkar_Raja': 'https://pushkarrajamirketa.github.io/journal.html',
	'Ridham_Godha': 'https://ridhammirketa.github.io/journal.html'
	'Sanidhya_Varshney': 'https://sanidhyavarshneymirketa.github.io/journal.html',
	'Shivank': 'https://shivankmirketa.github.io/Journal.html',
	'Surbhi_Yadav': 'https://surbhiyadavmirketa.github.io/journal.html',
    


};

// keep a global reference to iframe as it will be needed multiple times
myIframe = document.getElementById("my-iframe");

function populateNavbar()
{
    // get reference to navbar
    var myNavbar = document.getElementById("my-navbar");
    var serialNum = 1;
    for (var person in journalDetails)
    {
        // add a button for each person
        // make it call main on click with event
        myNavbar.innerHTML += `<a id='${person}' href='${journalDetails[person]}' onclick='showIframe(event)'>${serialNum}. ${person}</a><br>`
        serialNum++;
    }

    myIframe.style.right = '0px';
    myIframe.style.left = `${document.getElementById("my-sidebar").offsetWidth}px`;
}

// we want to highlight which name was just clicked, to keep track of where in the index we currently are
// to implement it we will have to clear this hightlight from previously clicked name
// so keep last event handy to modify its highlight
var lastEvent = null;

function showIframe(currentEvent)
{
    // find id of link which was pressed
    var person = currentEvent.target.id;

    // clear highlight of last clicked name
    if (lastEvent)
    {
        lastEvent.target.style.color = "#8ab4f8";
        lastEvent.target.style.backgroundColor = "transparent";
    }

    // apply highlight to current clicked name
    currentEvent.target.style.color = "black";
    currentEvent.target.style.backgroundColor = "#8ab4f8";

    // store current event as last event
    lastEvent = currentEvent;
    
    // load iframe of this person's journal
    myIframe.innerHTML = `<iframe src="${journalDetails[person]}" style="width: 100%; height: 100vh;"></iframe>`;

    // prevent link from opening
    currentEvent.preventDefault();
}

// populate navbar on pageload
populateNavbar()

// show first person's journal automatically
document.getElementById("my-iframe").innerHTML = `<iframe src="${journalDetails['Abhimanyu_Rana']}" style="width: 100%; height: 100vh;"></iframe>`;
