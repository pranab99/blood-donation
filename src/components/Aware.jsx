import './Aware.css'

function Aware(){
    return (
        <div>
            <div class="faq-header">Frequently Asked Questions</div>

<div class="faq-content">
  <div class="faq-question">
    <input id="q1" type="checkbox" class="panel" />
    <div class="plus">+</div>
    <label for="q1" class="panel-title">Why should I donate blood?</label>
    <div class="panel-content">The need for blood affects us all. Eight out of ten people need blood or blood products at some time in our lives. One out of every ten patients in hospital requires blood transfusion. The number of blood donations that patients receive depends on their medical condition. Although an average of three donations is transfused to a patient, some patients require many more.

Blood is in constant demand for the treatment of patients involved in accidents, patients with anaemia, malaria, cancer or a bleeding disorder such as haemophilia. Many surgical operations would not be possible without the availability of blood. Blood may be needed during or following childbirth or for an exchange transfusion in newborn babies.

The need for blood never stops. Blood donors save lives. Every blood donation gives the person who receives it a new chance at life.</div>
  </div>
  
  <div class="faq-question">
    <input id="q2" type="checkbox" class="panel"/>
    <div class="plus">+</div>
    <label for="q2" class="panel-title">How much wood would a woodchuck chuck?</label>
    <div class="panel-content">A woodchuck would chuck all the wood he could chuck, if a woodchuck could chuck wood!</div>
  </div>
  
  <div class="faq-question">
    <input id="q3" type="checkbox" class="panel"/>
    <div class="plus">+</div>
    <label for="q3" class="panel-title">What happens if Pinocchio says, "my nose will grow now"?</label>
    <div class="panel-content">Certain questions are better left &nbsp; <a href="https://en.wikipedia.org/wiki/The_Unanswered_Question" target="_blank">unanswered</a></div>
  </div>
</div>
        </div>
    )
}
export default Aware;