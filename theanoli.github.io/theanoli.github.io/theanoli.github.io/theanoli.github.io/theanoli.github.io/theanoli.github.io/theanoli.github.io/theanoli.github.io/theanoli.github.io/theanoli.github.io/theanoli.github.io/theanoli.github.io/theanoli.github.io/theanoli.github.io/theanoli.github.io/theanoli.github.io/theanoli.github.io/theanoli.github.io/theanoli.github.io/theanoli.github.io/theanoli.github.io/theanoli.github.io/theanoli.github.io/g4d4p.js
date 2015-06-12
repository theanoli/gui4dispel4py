// Predefined PE's for demo

var la = [
	"Plus 2",  // n=0
	"Minus 4", // n=1
	"Times 6", // n=2
	"Power 3", // n=3
	"Mod 8"    // n=4
];

var ip = "An integer."

var op = [
	"Input plus 2.",
	"Input minus 4",
	"Input times 6",
	"Input raised to the power of 3",
	"Remainder of input divided by 8"
];

var sc = [
	// +2
	"",
	// -4
	"",
	// *6
	"",
	// ^3
	"",
	// %8
	""
];

// Simple Elements

function SimpleElement(n)
{
	this.id = n;
	this.label = la[n];
	this.input = ip[n];
	this.output = op[n];
	this.script = sc[n];
	this.compound = false;
}

var plusTwo = new SimpleElement(0);
var minusFour = new SimpleElement(1);
var timesSix = new SimpleElement(2);
var powerThree = new SimpleElement(3);
var modEight = new SimpleElement(4);

// Work Flow

var workflow = new Array();

function addElement( element, position )
{
	workflow.splice( position, 0, element);
}

function removeelement( position )
{
	workflow.slice( position, 1 );
}

// Compound Elements

var a1 = [
	plusTwo,
	timesSix,
	modEight
];

var lc = [
	"Compound Element 1",  // n=0
	"Compound Element 2",  // n=1
	"New Compound Element" // n=2
];

function CompoundElement( n, ar )
{
	this.id = -1;
	this.label = lc[n];
	this.input = ar[0].input;
	this.output = ar[ar.length - 1].output;
	this.flow = ar;
	this.compound = true;
}

var compoundOne = new CompoundElement( 0, a1 );

var a2 = [
	minusFour,
	compoundOne,
	powerThree
];

var compoundTwo = new CompoundElement( 1, a2 );

var compoundNew;

function makeCompound()
{
	compoundNew = new CompoundElement( 2, workflow );
}

// Execution

var out = 1;

function execute()
{
	console.log(workflow[0]);
	for (i=0; i < workflow.length; i++)
	{
		console.log(workflow[i][0].label);
		if(workflow[i][0].compound)
		{
			for(j=0; j < workflow[i][0].flow.length; j++)
			{
				workflow.splice(
					i+j, 0, workflow[i][0].flow[j]
				);
			} 
		}

		switch(workflow[i][0].id)
		{
			case 0:
				out += 2;
				break; 
			case 1:
				out -= 4;
				break;
			case 2:
				out *= 6;
				break; 
			case 3:
				out = Math.pow( out, 3 );
				break;
			case 4:
				out %= 8;
				break;
		}	
	}
}

// Get position in workflow

// Expand Compound Element

function expandCompound(id)
{
	
}
