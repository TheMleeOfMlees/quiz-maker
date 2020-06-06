<template>
  <div>
      <div class="row">
          <div class="col-8 question-root" :class="borderClass">
              <span class="question">{{ind}}. <span v-html="format(question.question)"></span>
              </span>
              
              <div class="option-section">
                <div v-for="(option, i) in question.options"  class="option-row"
                    :key="i" :class="{'show-right-answer' : isSubmitted && !isCorrect && i=== question.answerIndex}">
                    <input type="radio" :value="i" :id="`question${ind}${i}`" v-model="answer"/> 
                    <label class="option-text" :for="`question${ind}${i}`">{{option}}</label>
                </div>
              </div>

              <div class="checkmark">
                  <img src="https://lh3.googleusercontent.com/proxy/d1o3GzAMEoU2xcFBsj31XHa_cNry1D_yIPxfZtgvGWKdAjXy7iUd_-i5Y4AM6G29p0mKRHjkNDpP97G3ccL6xj9_l3mnu-I"
                    style="width:20px;"/> Correct
              </div>
              <div class="wrong-answer">
                  <img :src="require('@/assets/WrongX.png')"
                    style="width:50px; vertical-align:bottom;"/> <br>Wrong
              </div>
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['question', 'ind', 'attemptedValidation', 'isSubmitted'],
    data(){
        return{
            answer: -1
        }
    },
    methods:{
        format(text){
            return text.replace(/\n/g, '<br>').replace(/\[tab\]/g, '&nbsp;&nbsp;&nbsp;&nbsp;')
        }
    },
    computed:{
        borderClass(){
            return {
                unanswered: this.attemptedValidation && this.isUnanswered,
                correct: this.isSubmitted && this.isCorrect,
                wrong: this.isSubmitted && !this.isCorrect
            }  
        },
        isCorrect(){
            return this.answer === this.question.answerIndex
        },
        isUnanswered(){
            return this.answer == -1
        }
    },
    watch:{
        answer(new_){
            debugger;
            this.$emit('on-answer-selected' , new_)
        }
    }
}
</script>

<style>
.unanswered{
    border:2px solid rgb(209, 212, 21) !important;
}
.wrong{
    border: 2px solid red !important;
}
.correct{
    border: 2px solid green !important;
}
.show-right-answer{
    border:2px solid rgb(2, 95, 2);
    background-color:rgb(36, 168, 36);
    color:white;
}
.wrong-answer{
    color:red;
    position:absolute;
    right:10px;
    bottom:10px; 
    display:none;
}
.option-row{
    width:80%;
    padding-left:10px;
    border-radius:10px;
    padding-top:5px;
}
.wrong .wrong-answer{
    display:block;
}
.checkmark{
    color:green;
    position:absolute; 
    right:10px;
    bottom:10px;
    display:none;
}
.correct .checkmark{
    display:block;
}
.question-root{
    margin:auto;
    border-radius: 8px;
    margin-top:20px;
    padding: 20px 30px;
    position:relative;
    background-color:white;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);

}
.option-text{
    display:inline-block;
    margin-left:10px;
    margin-top:5px;
}
.option-section{
    margin-top:10px;
    margin-left:20px;
}
</style>