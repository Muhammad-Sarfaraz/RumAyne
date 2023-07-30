<form method="post" action="{{ route('frontend.authenticate') }}" >

    @csrf
    <input name="email" value="" placeholder="email">
    <input name="password" value="" placeholder="password">

    <button type="submit" >submit</button>

</form>