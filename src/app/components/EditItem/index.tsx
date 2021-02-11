/**
 *
 * EditItem
 *
 */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import { Link } from 'app/components/Link';
import { EditInput } from 'app/components/EditInput';

interface Props {
  items?: any;
  updateFunc?: any;
}

export function EditItem(props: Props) {

  if (props.items[0]) {
    return (
      <>
        {props.items.map(function (element) {
            return <EditInput item={element} updateFunc={props.updateFunc} />;
        })}
      </>
    );
  } else {
    return <option>Empty</option>;
  }
}

