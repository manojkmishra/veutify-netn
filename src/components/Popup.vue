<template>
  <div class="text-center">
    <v-dialog width="500" v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn class="success" dark v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a New Project</v-card-title>
        <v-card-text>
            <v-form class="px-3" ref="form">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
                <v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>
                  <v-menu max-width="290">
                      <template v-slot:activator="{ on }">
                            <v-text-field :value="formattedDate" label="Due date" 
                            prepend-icon="mdi-calendar-range" v-on="on" :rules="inputRules"></v-text-field>
                      </template>
                      <v-date-picker v-model="due"></v-date-picker>
                    </v-menu>
                <v-btn text class="success mx-0 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
            </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import db from '@/fb' // eslint-disable-line
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
export default {
    data(){  return { title:'', content:'', due:'', inputRules:[v=>v.length>=3||'Min len is 3 chars'],
              loading:false, dialog:false }    },
    methods:{
        submit(){ if(this.$refs.form.validate())
                   {    this.loading=true;
                        console.log('form items=',this.title,this.content, this.due)   // eslint-disable-line
                        const project=
                        { title:this.title,content:this.content, 
                        due:format(parseISO(this.due),'do MMM yyyy'),
                        person:'Manoj Mishra', status: 'ongoing'
                        }
                        db.collection('projects').add(project).then(()=>
                          { console.log('added'); this.loading=false;  // eslint-disable-line
                            this.dialog=false; this.$emit('projectAdded') }) 
                   }
            }  
    },
    computed:{formattedDate(){return this.due ? format(parseISO(this.due),'do MMM yyyy') : ''}}
}
</script>
