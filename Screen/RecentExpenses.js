import React from 'react'
import { Text, View } from 'react-native'
import ExpenseOutput from '../Components/ExpenseOutput'

function RecentExpenses() {
  return <ExpenseOutput expensesPeriod="Last 7 Days"/>
}

export default RecentExpenses