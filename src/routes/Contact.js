import React from 'react';
import { ContactInfo } from '../data/contactInfo';
export default function Constact() {
    console.log("constacts....", ContactInfo);
  return (
    <main style={{ padding: '1rem 5rem' }}>
        <table>
            <tbody>
                {ContactInfo.constacts.map((data) => {
                    return(
                        <tr key={data.id}>
                            <td>data.name</td>
                            <td>data.number</td>
                            <td>data.email</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
      <span>Phone: </span><span style={{ padding: '0 5rem' }}>24234</span><br />
      <span>Email:</span><span style={{ padding: '0 5rem' }}>435@rrr4.com</span><br />
      <span>Address:</span><span style={{ padding: '0 5rem' }}>erwejhk</span><br />
    </main>
  );
}
