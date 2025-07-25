 <%@ params( names : String[] ) %>
 All Names: <% for( name in names ) { %>
   * ${name}
 <% } %>