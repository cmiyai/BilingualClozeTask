PennController.ResetPrefix(null);
//Loading in the Zip file from DreamHost to download study stimuli
PreloadZip("https://harvard-lds-langlab.com/web_experiments_8fdr3kasec/YH/MutualExclusivityExperiment/novelobjects.zip");
PreloadZip("https://harvard-lds-langlab.com/web_experiments_8fdr3kasec/YH/MutualExclusivityExperiment/familiarobjects1.zip");
PreloadZip("https://harvard-lds-langlab.com/web_experiments_8fdr3kasec/YH/MutualExclusivityExperiment/familiarobjects2.zip");
PreloadZip("https://harvard-lds-langlab.com/web_experiments_8fdr3kasec/YH/MutualExclusivityExperiment/pleaseselect.zip");
PreloadZip("https://harvard-lds-langlab.com/web_experiments_8fdr3kasec/YH/MutualExclusivityExperiment/audioinstructions.zip");
PreloadZip("https://harvard-lds-langlab.com/web_experiments_8fdr3kasec/YH/MutualExclusivityExperiment/introvids.zip");
PreloadZip("https://harvard-lds-langlab.com/web_experiments_8fdr3kasec/YH/MutualExclusivityExperiment/mestudyinstructionaudios.zip");
///PennController.Debug()
SetCounter("counter", "inc", 1);
//makes it so that the lists restart/randomize everytime a new participant begins the study

Sequence("checkloadings","counter","intro","sound_check","init","audio_trial","experiment_intro", randomize("trial1"),"debrief",SendResults(),"bye"); //sequence of trials/blocks you want and the order you want them to occur in

CheckPreloaded('audio_trial', 120000).label("checkloadings"); //checking to make sure one of the blocks has preloaded before the participant is allowed to continue

////////////////////Text for the consent & instructions////////////////////
consenttext = "<strong>Researcher:</strong> Yuhui Huang, Graduate Student	<br><strong>Faculty Advisor: </strong> Dr. Jesse Snedeker	<br><strong>Contact information: </strong> (617) 496-7175] | kidlab@g.harvard.edu 	<br>	<br><strong>Key Information:</strong>	<br>The following is a short summary of this study to help you decide whether or not you want to participate. More detailed information is listed later on in this form. 	<br>	<br><strong> Why am I being invited to take part in a research study? </strong>	<br>We invite you to take part in this research study because you meet the study’s requirements and are over the age of 18.	<br> 	<br><strong>What should I know about being in a research study? </strong>	<ul>	<li>You'll receive instructions on how to participate.</li>	<li>Whether or not you take part is up to you.</li>	<li>Your participation is completely voluntary.</li>	<li>You can choose not to take part.</li>	<li>You can agree to take part and later change your mind.</li>	<li>Your decision will not be held against you.  </li>	</ul>		<br><strong> Why is this research being done? </strong>	<br>The purpose of this study is to better understand the processes involved in language comprehension and how they develop in adults and children. 		<br><strong> How long will the research last and what will I need to do? </strong>	<br>We expect that you will be in this research study for no longer than 30 minutes.	<br>During this study, you will be asked to watch a series of visual displays and interact with the displays in some way. You may have to respond to, identify, or judge various stimuli. 	<br>During the study, we will record your responses.		<br><strong>Is there any way being in this study could be bad for me? </strong>	<br>We don’t believe there are any risks from participating in this research. 		<br><strong> Will being in this study help me in any way? </strong>	<br>There are no benefits to you besides any enjoyment you may get from the task. There may be possible benefits to others by gaining more information about language comprehension and development; however, this depends on the outcomes of the study.<br>	<br><strong>Detailed Information:</strong><br>The following is more detailed information about this study.	<br><strong> What is the purpose of this research? </strong>	<br>The purpose of this research is to better understand the processes involved in language comprehension and how they develop in adults and children.		<br><strong>How long will I take part in this research? </strong>	<br>This study will take no longer than 30 minutes to complete. 		<br><strong>What can I expect if I take part in this research? </strong>	<br>This study will take place entirely online. During this study, you will be asked to watch a series of visual displays. You will be asked to interact with the displays by clicking on an objects. In addition to watching visual displays, you may hear/see some linguistic and/or non-linguistic stimuli (for example words or sentences) before, during, or after the display is presented.		<br><strong> What happens if I say yes, but I change my mind later? </strong>	<br>You can leave the research at any time it will not be held against you. 		<br><strong> If I take part in this research, how will my privacy be protected? What happens to the information you collect? </strong>	<br>Efforts will be made to limit the use and disclosure of your Personal Information, including research study and medical records, to people who have a need to review this information. We cannot promise complete secrecy. Organizations that may inspect and copy your information include the Institutional Review Board (IRB) and other representatives of this organization. 		<br>If any publication results from this research, you will not be identified by name. If identifiers are removed from your identifiable private information or identifiable samples that are collected during this research, that information or those samples could be used for future research studies or distributed to another investigator for future research studies without your additional informed consent.		<br><strong> What else do I need to know? </strong>	<br>Compensation - If you agree to take part in this research study, we will pay you at a rate of $15 hour.	<br><strong> Who can I talk to? </strong>	<br>If you have questions, concerns, or complaints, or think the research has hurt you, contact the researcher at yhuang2@g.harvard.edu, the research team at kidlab@g.harvard.edu or (617) 496-2847, or the faculty member supervising this work: Prof Jesse Snedeker, snedeker@wjh.harvard.edu. 		<br>This research has been reviewed and approved by the Harvard University Area Institutional Review Board (“IRB”). You may talk to them at (617) 496-2847 or cuhs@harvard.edu if: 	<ul>	<li> Your questions, concerns, or complaints are not being answered by the research team. </li>	<li> You cannot reach the research team. </li>	<li> You want to talk to someone besides the research team. </li>	<li> You have questions about your rights as a research subject. </li>	<li> You want to get information or provide input about this research. </li></ul>";	

instr1 = "In this study ..."; 

instr3 = "The full appointment should take around 15 minutes, and there are no risks associated with this study. You will receive $5 for participating in this study, which we will grant you after you finish the study. You can stop participating at any point, and it will not be held against you in any way."; //do they still get $15 if they don't finish the experiment? Or do they get a smaller proportion of the amount? E.g., they finihsed half the experiment so they get $7.50?

instr4 = "Before we start the study, you’ll need to read the following information and consent to participating. Go ahead and read the consent form below.";

instr8 = "Let’s do a couple examples first.";


//////////////////////////// Header ////////////////////////////
Header(
    defaultText
            .css({'font-size':'1.50em',
                 "text-align": "center",
                 "line-height": "1.50em"
            })
            .print()
    ,
     defaultButton
            .size('12vw','12vh')
            .css('border-style','hidden')
            .color('white')
            .css({"background-color":"green",
                  "border-style":"hidden",
                  "border-radius":"10px",
                  "text-transform":"uppercase",
                  "margin-top": "2em"
            })
            .center()
);
//////////////////////////////////////////////////////Instructions & Introduction ////////////////////////////////////////////////

Template( "mutualexclusivityinstructions.csv" ,list=>
    newTrial( "intro" ,
    newImage("welcomescreen",list.Welcome_pic)
    .print("5vw", "15vh")
    .size("70vw","70vh")
    ,
    newButton("audiocheck","Make sure your audio is on!")
    .print("72vw", "30vh")
    .once()
    .wait()
    ,
    newAudio("introaudio",list.welscreen_audio)
    .print("65vw","50vh")
    .play()
    .wait()
    ,
    getButton("audiocheck").remove(),
    newButton("continuewelcome","Click to continue!")
    .print("72vw","30vh")
    .once()
    .wait(),
    getAudio("introaudio").remove(),
    getImage("welcomescreen").remove(),
    getButton("continuewelcome").remove(),
    newText("welcome", list.Welcome)
		.css({"font-size": "2em"})
		.center()
		.bold()
        .print()
        ,
    newAudio("welcomeaudio", list.Welcome_audio)
        .play("once")
        ,
	newText('thanks', "Thank you for signing up for this study!")
		.css({'font-size': '1.5em'})
		.center()
	,
	newText('instructions-intro', "Before we begin we will tell you a little bit about the study.")
		.css({'font-size': '1.5em'})
		.center()
	,
	newButton('continue_intro', 'Continue')
		.print()
		.wait()
	,
	clear()
	,
	newText("title", 'What do you need to do?')
		.css({
			  "font-size": "2em"
			})
		.center()
		.bold()
	,
	newText("instr1",list.Instructions1)
        .css({"font-size": "1.5em"})
		.center()
        .print()
        ,
    newAudio("instraudio", list.Instructions_Audio1)
        .play("once")
        .wait("first")
	,
	newButton('continue_intro2', 'Continue')
	.print()
	.wait()
	.hidden()
	,
	getText("title").text("What information do we need from you?").size("50vw","10vh")
	,
	newText("separate12", " ")
	.print()
	,
    getText("instr1").text("We need your age, language proficiencies, and gender (for statistic purposes). To keep your information private please input your Prolific ID:")
	,
	newTextInput("pseudonim","")
			.before(newText("pseudonim-inst", "Please write your Prolific ID here:"))
			.center()
			.print()
	,
	newText("separate2"," ")
	,
	newButton("gotoConsent","send IdentityCode")
		.size('20vw','10vh')
		.print()
		.wait(getTextInput("pseudonim")
				.testNot.text("")
				.failure(newText("wrong_ID","Please, write your Identity Code")
								.center()
								.css("color","red"),
						newTimer("eliminate_ID",500).start().wait(),
						getText("wrong_ID").remove()))
		.remove()
	,
	newVar('ID').set(getTextInput("pseudonim")).global()
	,
	getTextInput("pseudonim").remove(),
	getText("separate2").remove()
	,
	getText("instr1").text("Please, provide us with your age, gender, and language proficiencies.")
	,
	 newTextInput("edat","")
			.before(newText("edat-inst", "How old are you?")) 
			.center()
			.size("7vw",'5vh')
			.print()
	,
	newText("separate3","  ")
	,   
	newDropDown("gender","")
			.add("Female","Male","Non-binary","Other") 
	 		.before(newText("gender-inst", "How do you identify yourself?"))
			.center()
			.size("7vw",'5vh')
			.print()
	,
	newText("separate4","  ")
	,
	newTextInput("languages", "")
	.before(newText("languages", "What languages can you speak?")) 
			.center()
			.size("7vw",'5vh')
			.print()
	,
	newText("separate5", "  ")
	,
	 newButton("gotoConsent2","send")
		.size('20vw','10vh')
		.print()
		.wait(getTextInput("edat")
				.testNot.text("")
				.failure(newText("wrong_age","Please, provide your age")
								.center()
								.css("color","red"),
						newTimer("eliminate_age",500).start().wait(),
						getText("wrong_age").remove()))
		.wait(getTextInput("languages")
		    .testNot.text("")
		    .failure(newText("wrong_languages", "Please, list your languages")
		            .center()
		            .css("color","red"),
		            newTimer("eliminate_lang",500).start().wait(),
		            getText("wrong_languages").remove()))
		.remove()
	,
	newVar('age').set(getTextInput("edat")).global(),
	newVar('sex').set(getDropDown("gender")).global(),//this and the line above are creating the variables "age" and "gender" and basing the value of each on the responses the participants filled in earlier. Later, at the end of this block you can use the information in the newVar() to log the age and gender provided by the participant. If you want any other demographic information you can add it here.
	newVar('lang').set(getTextInput("languages")).global()
	,
	getTextInput("edat").remove(),
	getDropDown("gender").remove(),
	getTextInput("languages").remove(),
	getText("separate3").remove(),
	getText("separate4").remove(),
	getText("separate5").remove()
	,
	getText("instr1").text(instr4) 
	,
	
   newText("consentText",consenttext) // calling the text written above in the consent & instructions section, make modifications up there and they will be reflected at this step
    .css({"text-align": "left", "margin": "2em",
         'font-size':'1em'}).print(),
    
    newButton("consentYes", "I consent").css({"background-color":"green"}),
    newButton("consentNo", "I DON'T consent").css({"background-color":"red"})
    ,
    newCanvas("Consentingcanvas", "80vw","10vh")
            .add("left at 0", "top at 0", getButton("consentYes") )
            .add("right at 100%", "top at 0", getButton("consentNo") )
            .center()
            .print()
    ,
    newSelector('ConsentingChoice')
            .add(getButton("consentYes"), getButton("consentNo"))
            .wait()
            .test.selected(getButton("consentNo")).success(
            getText("consentText").remove(),
           getCanvas("Consentingcanvas").remove(),
            newText("ThanksBye","Thank you for your interest in our study! Unfortunately we cannot run the study if you don't consent."),
            newButton("neverPress","Bye").wait())
    ,
    getText("consentText").remove(),
    getText("instr1").remove(),
    getCanvas("Consentingcanvas").remove(),
    getSelector("ConsentingChoice").remove(),
    getText("title").text("<br> Are you ready to begin?")
    .print("center at 50vw", "10vh"),
    newButton("Exp_Continue", "Yes!")
    .css({"background-color":"green"})
    .print("center at 50vw", "50vh")
    .wait()

)
.log('ID', getVar("ID"))
.log('Age', getVar('age'))
.log('Gender', getVar('sex'))
.log("Lang", getVar('lang'))
.setOption("countsForProgressBar", false)
);

////////////////////////////////////////Trial 1////////////////////////////////////////
Template( "mutualexclusivityinstructions.csv" ,list=>
newTrial( "experiment_intro" ,//whatever name you put here you will need to put in your sequence

	newText("title2","Let's review the instructions!")
		.css({"font-size": "2em"})
		.center()
		.bold()
        .print()
        ,
    newText("instr2",list.Instructions2)
    .css({"font-size": "1.5em"})
		.center()
        .print(),
	newAudio("instraudio2",list.Instructions_Audio2)
        .play("once")
        .wait("first"),
    newButton('continue_intro3',"Continue")
        .print()
        .wait(),
    getButton("continue_intro3").remove(),
    getText("instr2").text(list.Instructions3)
	    .css({"font-size": "1.5em"})
		.center()
        .print(),
    newAudio("instraudio3",list.Instructions_Audio3)
        .play("once")
        .wait("first"),
    newButton('continue_intro4',"Let's begin!")
        .print()
        .wait()
        ));

Template( "mutualexclusivitylist_v2.csv" ,list=>
    newTrial( "trial1" ,
	fullscreen()
	,
    newVar("Answer",100).global(),
    newVar("TrialCount",1).global(),
    
    newImage("Image1",list.Picture1_png) 
        .size("30vw","40vh")
        .print("10vw","40vh")
    ,
    newImage("Image2",list.Picture2_png) 
        .size("30vw","40vh")
        .print("60vw","40vh")
    ,
    newTimer("waitasec",500).start().wait(),
    newAudio("Pleaseselect",list.Audio_mp3)
    .center()
    .print()
    .play()
    .wait()
    ,
    newTimer("wait3", 1500)
        .start()
        .wait()
    ,
    newCanvas("familiar", "30vw","40vh") //potentially vary by list
        .css("border", "solid 3px black")
        .print(list.familiar_canvas_X, "40vh") //to vary by list
    ,
    newCanvas("novel", "30vw","40vh") //potentially vary by list
        .css("border", "solid 3px black")
         .print(list.novel_canvas_X, "40vh")//to vary by list
    ,

    newSelector('SelectorChoice')
        .add(getCanvas("familiar"), getCanvas("novel") )
        .wait()
        .log()
    ,
    getCanvas("familiar").remove()
    ,
    getCanvas("novel").remove()
    ,
    getAudio("Pleaseselect").remove()
    ,
    getSelector("SelectorChoice")
                    .test.selected(getCanvas("familiar"))
                        .success(
                            newCanvas("familiar_select","30vw","40vh").css("border", "solid 7px green")
                                    .print(list.familiar_canvas_X, "40vh") //to vary by list
                            ,
                            newText("Success_familiar","<strong>Good job!</strong>")//change depending on type of feedback you want to give following selection
                                    .css({
                                        'font-size': '1.75em', 
                                        'margin': '2em',
                                        'text-align': 'center',
                                        'background-color': 'white', 
                                        'padding': '10px', 
                                        'border-radius': '10px' 
                                         })
                                    .print("center at 50vw", "20vh"),
                            newTimer("continue_pos",3000).start().wait()
                            ,
                            getText("Success_familiar").remove())
                        .failure(
                            newCanvas("novel_select","30vw","40vh").css("border", "solid 7px green")
                                     .print(list.novel_canvas_X, "40vh")//to vary by list
                            ,
                             newText("Failure_familiar","<strong>Good job!</strong>")//change depending on type of feedback you want to give following selection
                                    .css({
                                        'font-size': '1.75em', 
                                        'margin': '2em',
                                        'text-align': 'center',
                                        'background-color': 'white', 
                                        'padding': '10px', 
                                        'border-radius': '10px' 
                                         })
                                    .print("center at 50vw", "20vh"),
                            newTimer("continue_neg",3000).start().wait() 
                            ,
                            getText("Failure_familiar").remove())
                            ,
    getImage("Image1").remove()
    ,
    getImage("Image2").remove()
    ,
    getCanvas("familiar_select").remove()
    ,
    getCanvas("novel_select").remove()
    ,
    getVar("TrialCount").test.is(1)
    .success(
         newText("Again","<strong>Let's do it again!</strong>") 
            .css({
                'font-size': '1.75em',
                'margin': '2em',
                'text-align': 'center' 
                 })
            .print("center at 50vw", "15vh"))
    .failure(newText("Again2","<strong>Let's do it again!</strong>")
                .css({
                'font-size': '1.75em',
                'margin': '2em',
                'text-align': 'center' 
                 })
            .print("center at 50vw", "15vh"))
    ,
    newButton("Follow_Continue", "Continue!").css({"background-color":"green"}).print("center at 50vw", "30vh").wait()
    ,
getVar("TrialCount").set(v=>v+1)
)
.log('familiar/novel',getVar("TrialCount"))
.log("condition", list.Condition)
.log("leftimage", list.Picture1_name)
.log("rightimage", list.Picture2_name)
.log("novelname",list.Audio_name)
.log("trialtype",list.trial_label)
.log("picture1type",list.Picture1_Type)
.log("picture2type",list.Picture2_Type)
.log('Age', getVar('age'))
.log('Gender', getVar('sex'))
.log("Lang", getVar('lang'))
.log("ID",getVar("ID"))///<- example of how to log value coming from a cloumn in the list!
);
////soundcheck

newTrial( "sound_check" , 
    newText("sound_checkdirections", "Click below to listen to the directions for the sound check!")
    .center()
    .print()
    ,
	newText("separate10"," ")
	.print()
	,
    newAudio("soundcheckdirections", "soundcheck.mp3")
    .center()
    .print()
    .wait()
    ,
    newText("separate11"," ")
	.print()
	,
    newTextInput("soundcheckinput","")
		.before(newText("soundcheckinput", "Please type the keyword here and then press Enter.  "))
		.center()
		.print()
		.wait()
	,
	newButton("moveon","Click to continue!")
	.center()
    .print()
    .wait(),
    getAudio("soundcheckdirections").remove(),
    getText("sound_checkdirections").remove(),
    getButton("moveon").remove(),
    newVar('soundcheck').set(getTextInput("soundcheckinput")).global()

)
.log('soundcheck?', getVar('soundcheck'));

//////////////////?Audio recording example////////////////////

InitiateRecorder("https://harvard-lds-langlab.com/web_experiments_8fdr3kasec/YH/MEStudyRecordings/PCIbexrecordings.php","This experiment collects audio recordings. You will be notified whenever you are being recorded by a label at the top of the page. <br/> <br/> For this to work, please <strong>grant this page access to your microphone</strong> and then <strong>consent to being recorded by clicking on the text below:</strong>.")
.label("init");

newTrial( "audio_trial" , 
    
// add repeat/play again function?
        newCanvas("screen", 800,580)
            .center()
            .print()
        ,
        newImage("farmboy","farmboy.png")
        .center()
        .size('30vw','60vh')
        .print("center at 50vw","20vh")
        ,
        newText("recordinginstr", "<p>Please describe (with 3-5 sentences) the picture below in your two dominant languages. If you speak more than two languages, please use two of the most dominant languages. If you only speak one language, just record in that language. </p>")
        .print("center at 50vw", "80vh")
        ,
        newText("<p><strong>Audio Recording</strong></p>")
        .center()
        ,
        newMediaRecorder("recorder","audio")
        .center()
        .print()
        .wait()
        ,
         newTimer("ITI", 1500)
             .start()
             .wait()
        ,
        newButton("continuecontinue", "All done!")
        .css({"background-color":"green"})
        .size('20vw','10vh')
		.print("center at 50vw", "90vh")
        .wait()

);

UploadRecordings("upload");

///Debrief////

debrief1 = "Let me tell you a little more about why we’re doing this study!";
debrief2 = "Mutual exclusivity is a strategy used by children when learning new languages. This is when a child presented with a familiar object and an unfamiliar object will assign a new name to the unfamiliar object. The goal of this task is to decipher if this strategy is the default for both bilingual and monolingual speakers, and to see if the instructions given to you might change which strategy you might use.";
debrief3 = "If you have questions or concerns about your participation or payment, or want to request a summary of research findings, please contact the researcher: (Yuhui Huang, yhuang2@g.harvard.edu). For any other problems related to this study, you may also contact the faculty member supervising this work: (Jesse Snedeker, snedeker@wjh.harvard.edu). <br>   	 Whom to contact about your rights in this research: For questions, concerns, suggestions, or complaints that are not being addressed by the researcher, or research-related harm: Committee on the Use of Human Subjects in Research at Harvard University, Phone: 617-496-CUHS (2847). Email: cuhs@harvard.edu <br>    <br> 	 <strong>Thank you for participating!</strong>";

newTrial( "debrief" ,
    newText("title", 'Debrief Questions')
		.css({
			  "font-size": "2em"
			})
		.center()
		.bold()
	,
	newText("sep","  ")
	,
    newTextInput("debriefquestion1")
    .before(newText("debriefquestion1", "What did you think this study was about?"))
    .center()
    .print()
    ,
    newButton("gotoConsent2","Submit")
		.size('20vw','10vh')
		.print()
        .wait(getTextInput("debriefquestion1")
    				.testNot.text("")
    				.failure(newText("wrong_d1","Please answer the question")
    								.center()
    								.css("color","red"),
    						newTimer("eliminate_debrief",500).start().wait(),
    						getText("wrong_d1").remove()))
		.remove()
    ,
    newVar('debriefopenquestion').set(getTextInput("debriefquestion1")).global()
    ,
    getTextInput("debriefquestion1").remove(),
    newText("debriefQ","Which did you think this study was more about?")
      .center()
      .print()
    ,
    newSelector("position")
    ,
    newCanvas("buttons", 200, 50)
      .add(-150, 0, newButton("Learning new objects!").selector("position") )
      .add(200, 0, newButton("Learning new languages!").selector("position") )
      .center()
      .print()
    ,
    getSelector("position")
      .shuffle()
      .once()
      .wait()
      .log()
    ,
    getCanvas("buttons").remove()
    ,
    newButton("Next")
    .center()
    .print()
    .wait()
    ,
    getText("debriefQ").remove(),
    getButton("Next").remove()
    ,
    newVar('debriefforcedchoice').set(getSelector("position")).global()
    ,
    getText("title").text("Let me tell you a little more about why we’re doing this study!")
	,
    newText("answer")	
		.text(debrief2)
        .css({"font-size": "1.5em"})
		.center()
		.print()
	,
	newButton('continue_intro', 'Continue')
		.print()
		.wait()
	,
	clear()
	,
	newText("answer2").text(debrief3)
	.print()
	,
		newButton('continue_outro', 'Continue')
		.print()
		.wait()
)

.log('debriefQ1', getVar('debriefopenquestion'))
.log('debriefQ2', getVar('debriefforcedchoice'))
.log("ID",getVar("ID"));

///////Bye///////
    newTrial( "bye" ,
    newText("thanks","Thank you so much for participating in our study! You may now go back to Prolific and enter your code to receive the credit.")
    ,
    newText("reminder","Your code is:L512")
    .css({"padding": "1%",
        "font-size":"2em"
    })
    .bold()
    .center()
    .print()
    ,
    newTimer("forever",1)
        .wait()            // Timer never started: will wait forever
    )
