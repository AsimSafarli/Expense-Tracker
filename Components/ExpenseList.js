import React from 'react'
import { FlatList, Text } from 'react-native'
import ExpenseItem from './Expenseİtem';

function ExpenseList({expenses}) {
    function renderExpenseItem(itemData){
        return <ExpenseItem {...itemData.item}/>;
    }
  return <FlatList data={expenses} renderItem={renderExpenseItem}  keyExtractor={(item) => item.id}/>;
}

export default ExpenseList