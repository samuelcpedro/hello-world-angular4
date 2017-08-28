import { CoursesService } from './courses.service';
/**
 * We are importing da component decorator
 * https://angular.io/api/core/Component#description
 * Component decorator allows you to mark a class as an Angular component and provide additional metadata that determines how the component should be processed, instantiated and used at runtime.
 */
import { Component } from "@angular/core";

//decorator function
@Component({
    //property selector is a css selector that identifies this component in a template
    selector: 'courses', // to refence a element <courses> use "courses" or element <div class="courses"> use ".courses" or element <div id ="courses"> use "#courses"
	template: `
		<b>With summary and limits (1000)</b>
		<br/>
		{{ text | summary:1000 }}
		<br/>
		<br/>
		<b>With summary (default:50)</b>
		<br/>
		{{ text | summary }}
		<br/>
		<br/>
		<b>Without summary...</b>
		<br/>
		{{ text }}
	`
})

export class CoursesComponent {
	text = `Lorem ipsum dolor sit amet, minim regione pro ea. Scripta corrumpit et qui, cu vix alii verterem. Simul diceret tibique vim in, debet elitr legere qui ad, per id odio volutpat. Ea aeque movet vix, his prima noster nostro id. Mucius possim reformidans et eam. Et aliquam contentiones vix.
	
	Ius id omnis posse, id viderer delectus accommodare nec. Duis lucilius cum eu, cu mel dolore discere blandit. An eros summo omnes sed, vim facer virtute antiopam no. Cum eu sint eros, ex decore vulputate est, viris iisque et has. Ea modo principes accommodare vis, sed at dictas lucilius accusata.
	
	Soluta ullamcorper ne nam. Choro doctus pro ne. Mea quodsi aeterno ut, no iuvaret repudiandae delicatissimi vis, at vis pericula pertinacia. Vidisse mediocrem est ne, usu facilisi repudiandae ea, cu per vidit veritus salutatus. Nibh dicunt habemus mei ea, scripta convenire te mel, an solum ludus vis.
	
	Quis soluta consequat eu ius. At meliore ceteros mea, cu harum mucius pericula per. Solum populo ad sea. Ius an probatus ocurreret reformidans, cum reque bonorum antiopam an, et veri primis tamquam est. Id sea nullam posidonium voluptatibus, at sed unum contentiones. Nostrum propriae at per, appellantur reprehendunt ea est, sit no persecuti inciderint.
	
	Quo error placerat ne. Est ad meis prodesset, ubique detraxit adolescens pro eu, inermis eloquentiam deterruisset vix ut. Omnium assueverit duo ne. Ut qui mundi errem, te graeco constituam eloquentiam has. Eam percipit electram forensibus ex, pri etiam corpora deterruisset ne. Vide efficiantur vix et.
	
	Nam ei erant lucilius, nec civibus minimum offendit no. Cu altera fierent conceptam vix. Dicant lucilius assentior duo ad. Ullum salutandi pro ei, sea ne novum propriae detracto. Ut modo senserit cum, vero laudem vis ne.
	
	Ei pri appareat atomorum definiebas. In sed purto oblique, nec cu alia sonet expetenda. Utinam offendit mei ea, an duo postea consectetuer. Vim et ipsum voluptaria. Usu congue dicunt ad, te diam rebum nominavi pri, his populo electram ei. Sea vocibus repudiare ea, te vim odio quaeque.
	
	Cum in quando legere, mel cu congue quando ponderum. Euripidis interpretaris te eos, qui ex commodo vivendum tractatos. No diam porro platonem ius, ne inani possim vel. Ea duo sale justo, qui ad noster inermis expetenda.
	
	Pri cu doming saperet, ne nominavi volutpat urbanitas vel. Detraxit vituperatoribus id pro. Qui appareat eloquentiam ex. Vel in ponderum deserunt cotidieque, an tacimates iudicabit incorrupte has. Ex adipisci invenire sit, omnis idque utinam ei est. Eu per nostro placerat moderatius, mediocrem torquatos et pri.
	
	Vis ut fastidii definiebas sadipscing, esse virtute neglegentur nam ei, nec liber mediocrem ex. Vis tota inani an, eam unum iusto molestiae eu. Ei qui vituperata definitiones. Sed ut sale libris deterruisset.
	`
}