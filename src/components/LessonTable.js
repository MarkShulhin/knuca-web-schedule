import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap';


import 'react-table/react-table.css';

import mapLessonResponseToTableData from '../utils/mapLessonResponseToTableData';
import weekDayOrToday from '../utils/weekDayOrToday';

const LessonTable = ({
  lessonsState: {
    lessons, isLoading, isFetched, searchItem,
  },
}) => {
  const data = mapLessonResponseToTableData(lessons);
  const day = lessons.length > 0 ? lessons[0].date : undefined;
  const header = `${searchItem.name} - ${weekDayOrToday(day)}`;
  const pageSize = data.length || 4;
  if (isLoading || isFetched) {
    return (
      <div>
        <ReactTable
            data={data}
            noDataText="На сьогодні немає пар"
            columns={[
            {
              Header: header,
              columns: [
                {
                  Header: 'Час',
                  accessor: 'time',
                  maxWidth: 70,
                },
                {
                  Header: 'Дісципліна',
                  accessor: 'subject',
                  minWidth: 180,
                },
                {
                  Header: 'Тип',
                  accessor: 'lessonType',
                  maxWidth: 130,
                },
                {
                  Header: 'Викладач',
                  accessor: 'teachers',
                },
                {
                  Header: 'Аудиторія',
                  accessor: 'rooms',
                  minWidth: 100,
                },
                {
                  Header: 'Групи',
                  accessor: 'groups',
                  minWidth: 120,
                },
              ],
            },
          ]}

            defaultPageSize={4}
            pageSize={pageSize}
            showPageSizeOptions={false}
            showPagination={false}
            sortable={false}
            loading={isLoading}
            className="-striped -highlight"
        />
        <br />
        <Row>
          <Col><Button outline block color="secondary">Завтра</Button></Col>
          <Col><Button outline block color="secondary">Тиждень</Button></Col>
          <Col><Button outline block color="secondary">След. тиждень</Button></Col>
        </Row>
      </div>
    );
  }
  return null;
};

LessonTable.propTypes = {
  lessonsState: PropTypes.shape({
    lessons: PropTypes.array,
    isLoading: PropTypes.bool,
    isFetched: PropTypes.bool,
    searchItem: PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number,
    }),
  }),
};

export default LessonTable;
