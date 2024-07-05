import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom' ;
import {Box} from '@mui/material'

import {exercisesOptions, fetchData} from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  return (
    <Box>
      <Detail/>
      <ExerciseVideos/>
      <SimilarExercises/>
    </Box>
  )
}

export default ExerciseDetail