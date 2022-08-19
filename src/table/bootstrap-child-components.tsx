
import { DataType } from 'ka-table/enums';
import { ChildComponents } from 'ka-table/models';
import * as React from 'react';

import { CustomLookupEditor, DateEditor, NumberEditor } from './editors';

export const bootstrapChildComponents: ChildComponents = {
  table: {
    elementAttributes: () => ({
      className: 'table table-striped table-hover table-bordered'
    })
  },
  noDataRow: {
    content: () => 'No Data Found'
  },
  filterRowCell: {
    content: (props) => {
      const getEditor = () => {
        switch (props.column.key){
          case 'column1': return <CustomLookupEditor {...props}/>;
          case 'column2': return <></>;
          case 'column3': return <NumberEditor {...props}/>;
          case 'column4': return <DateEditor {...props}/>;
        }
      }
      return (
        <div className='d-flex'>{getEditor()}</div>
      )
    }
  },
  cellEditorInput: {
    elementAttributes: ({column}) => ({
      className: column.dataType === DataType.Boolean ? 'form-check-input' : undefined
    }),
  },
  pagingIndex: {
    elementAttributes: ({ isActive }) => ({
      className: `page-item ${(isActive ? 'active' : '')}`
    }),
    content: ({ text, isActive }) => <div className={`page-link ${(isActive ? 'active' : '')}`}>{text}</div>
  },
  pagingPages: {
    elementAttributes: () => ({
      className: 'pagination'
    }),
  }
};
