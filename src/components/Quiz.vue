<template>
  <div>
        <div class="row" id="heading">
            <div class="col-12">
                <h1> 
                    Quiz 1 - HTML / CSS / JS Practice
                </h1>
            </div>
        </div>
        <div class="row" v-if="isSubmitted">
            <div class="col-12 text-center" style="padding-top:30px; font-size:28px;">
                <p style="text-decoration:underline;">Results</p>
                You got {{numRight}} / {{numQuestions}} questions correct
                <br>
                <span style="font-weight:bold;" :style="`color: ${grade >= 70 ? 'green' : 'red'}`">{{grade.toFixed(0)}} %</span>
            </div>
        </div>
        <question v-for="(question, ind) in allQuestions" :attemptedValidation="attemptedValidation" :isSubmitted="isSubmitted"
        @on-answer-selected="question.chosenAnswer = $event" 
        :question="question" :key="ind" :ind="ind+1"></question>
        <div class="row">
            <button id="submit" v-if="!isSubmitted" @click="gradeQuiz">Submit</button>
        </div>
        
  </div>
</template>

<script>
import questions from '../data/quiz1.js';
import Question from './Question';

export default {
    components:{
        Question
    },
    data(){
        return{
            attemptedValidation: false,
            isSubmitted: false,
            numRight: 0,
            numQuestion: 0,
            grade: 0
        }
    },
    methods:{
        validateQuiz(){
            this.attemptedValidation = true;
            return !this.allQuestions.some(x => x.chosenAnswer == -1)
        },
        gradeQuiz(){
            if(this.validateQuiz()){
                this.numRight = this.allQuestions.filter(x => x.chosenAnswer == x.answerIndex).length;
                this.numQuestions = this.allQuestions.length
                this.grade = (this.numRight / this.numQuestions) * 100;
                this.isSubmitted = true;
                  $('html,body').animate({ scrollTop: 0 }, 'fast');
                //alert(`You got  correct! You scored ${}%`)
            }
        }
    },
    computed:{
        allQuestions(){
            return questions;
        }
    }
}
</script>

<style>
#submit{
    display:inline-block;
    margin:auto;
    background-color:#1c790a;
    border:none;
    padding: 10px 20px;
    border-radius: 6px;
    color:white;
    margin-top:20px;
}
#heading{
    padding-top:20px;
    padding-left:20%;
}
</style>